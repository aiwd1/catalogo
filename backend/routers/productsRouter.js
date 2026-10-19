import { Router } from "express";
// Per ora i dati arrivano da un array in un file JS (niente database):
// l'export default del file è la lista dei prodotti { id, name, descrizione, price }
//import products from '../data/db-store-completo.js';
import { client } from '../prisma-client.js';
import checkProductId from "../middlewares/checkProductId.js";
import checkProductBody from "../middlewares/checkProductBody.js";

const router = Router();

function formatProduct(product) {
    return {
        ...product, // prendi tutti i campi dell'oggetto products
        categories: product.categories.map(pivot => {
            return pivot.category;
        }), // vai a aggiungere/sovrascrivere categories
    };
}

// GET /products → restituisce tutti i prodotti.
// Forma della risposta { success, message, data }: tutte le risposte dell'API
// hanno la stessa struttura, così il frontend sa sempre dove trovare i dati
// (in data) e se la richiesta è andata a buon fine (success).

// http://localhost:3000/products?page=N&limit=M
// http://localhost:3000/products?page=1&limit=20
// http://localhost:3000/products?search=mouse&page=1&limit=20
// http://localhost:3000/products
// http://localhost:3000/products?category=2
router.get('/', async (req, res) => {
    const search = (req.query.search || '').trim();
    // Valori non validi (negativi, decimali, testo) tornano ai default: skip/take negativi farebbero fallire Prisma
    const pageParam = Number(req.query.page);
    const limitParam = Number(req.query.limit);
    const page = Number.isInteger(pageParam) && pageParam >= 1 ? pageParam : 1;
    const limit = Number.isInteger(limitParam) && limitParam >= 1 ? Math.min(limitParam, 100) : 10;

    let categoryId; // Se è undefined vuol dire che non mi è stato passato nulla e
    // quindi non voglio il filtro della categoria

    if (req.query.category !== undefined) { // Se mi è stato passato un valore
        categoryId = Number(req.query.category);
        if (!Number.isInteger(categoryId) || categoryId <= 0) { // Controllo la sanità del valore
            return res.status(400).json({
                success: false,
                message: 'category deve essere un intero maggiore di 0',
                data: null
            });
        }
    }

    const whereParam = {
        name: {
            contains: search
        },
    };

    if (categoryId !== undefined) {
        whereParam.categories = {
            some: {
                categoryId
            }
        }
    }

    const total = await client.product.count({
        where: whereParam
    }); // Il numero di record che rispettano il filtro

    const products = await client.product.findMany({
        include: {
            categories: { // ProductCategory
                select: {
                    category: { // Category
                        select: {
                            id: true,
                            name: true
                        }
                    }
                }
            }
        },
        where: whereParam,
        take: limit,
        skip: (page - 1) * limit,
        orderBy: {
            id: 'desc'
        }
    });

    const productPretty = products.map(product => {
        return formatProduct(product);
    });

    res.json({
        success: true,
        message: '',
        data: productPretty,
        meta: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit)
        }
    });
});

// http://products/1 Primo prodotto
// http://products/2 Secondo prodotto

// Dammi il prodotto con id 1
// Utilizzando lo slug in non ho conoscenza degli id
// Non posso chiedere dammi il prodotto con id 1
// Devo chiedere dammi il prodotto con slug "tastiera-bluetooh"

router.get('/:id', checkProductId, async (req, res) => {
    const id = Number(req.params.id);

    const product = await client.product.findUnique({
        where: {
            id
        },
        include: {
            categories: { // ProductCategory
                select: {
                    category: { // Category
                        select: {
                            id: true,
                            name: true
                        }
                    }
                }
            }
        },
    });

    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'prodotto non trovato',
            data: null
        });
    }

    res.json({
        success: true,
        message: '',
        data: formatProduct(product)
    });

});

// CRUD per creare un prodotto
router.post('/', checkProductBody, async (req, res) => {
    const { name, descrizione, price, image, categoryIds } = req.sanitizedData;

    // [1, 2, 3] => [{id: 1}, {id: 2}, {id: 3}]
    const product = await client.product.create({
        data: {
            name,
            descrizione,
            price,
            image,
            categories: {
                create: categoryIds.map(categoryId => {
                    return {
                        categoryId
                    };
                })
            }
        }
    });

    res.status(201).json({
        success: true,
        message: '',
        data: product
    });
});

router.put('/:id', checkProductId, checkProductBody, async (req, res) => {
    const { name, descrizione, price, image, categoryIds } = req.sanitizedData; // Il JSON contenuto nel corpo del messaggio inviato dal Client

    // Prodotto con id: 5
    // Ha queste categorie [1, 3]

    // Nel nostro aggiornamento voglia assegnarli [3, 5]
    // Cancella tutte le relazione
    // Aggiungi le relazioni [3, 5]

    try {
        const product = await client.product.update({
            include: {
                categories: { // ProductCategory
                    select: {
                        category: { // Category
                            select: {
                                id: true,
                                name: true
                            }
                        }
                    }
                }
            },
            data: {
                name,
                descrizione,
                price,
                image, // undefined: Prisma non tocca la colonna, così il form di modifica non cancella l'immagine
                categories: {
                    // Cancella tutte le relazioni
                    deleteMany: {},
                    // Aggiungi le relazione
                    create: categoryIds.map(categoryId => {
                        return {
                            categoryId
                        };
                    })
                }
            },
            where: {
                id: Number(req.params.id)
            }
        });
        res.json({
            success: true,
            message: "Prodotto aggiornato",
            data: formatProduct(product)
        });

    } catch (err) {
        if (err.code === 'P2025') { // Quando non trovo il prodotto
            return res.status(404).json({
                success: false,
                message: 'Prodotto non trovato',
                data: null
            });
        }
        throw err;
    }
});

// DELETE /producsts/9 Voglio rimuovere il prodotto con id 1
router.delete('/:id', checkProductId, async (req, res) => {
    const id = Number(req.params.id);

    try { // Il blocco di codice che sto provando a eseguire
        const product = await client.product.delete({
            where: {
                id: id
            }
        });

        res.json({
            success: true,
            message: '',
            data: product
        });

    } catch (err) { // Codice eseguito in caso di errore
        if (err.code === 'P2025') { // Quando non trovo il prodotto
            return res.status(404).json({
                success: false,
                message: 'Prodotto non trovato',
                data: null
            });
        }
        throw err;
    }

});

export default router;
