import { Router } from "express";
// Per ora i dati arrivano da un array in un file JS (niente database):
// l'export default del file è la lista dei prodotti { id, name, descrizione, price }
//import products from '../data/db-store-completo.js';
import { client } from '../prisma-client.js';
import checkProductId from "../middlewares/checkProductId.js";
import checkProductBody from "../middlewares/checkProductBody.js";

const router = Router();

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
        where: whereParam,
        take: limit,
        skip: (page - 1) * limit,
        orderBy: {
            id: 'desc'
        }
    });

    res.json({
        success: true,
        message: '',
        data: products,
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
        }
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
        data: product
    });

});

// CRUD per creare un prodotto
router.post('/', checkProductBody, async (req, res) => {
    const { name, descrizione, price } = req.sanitizedData;

    const product = await client.product.create({
        data: {
            name,
            descrizione,
            price
        }
    });

    res.status(201).json({
        success: true,
        message: '',
        data: product
    });
});

router.put('/:id', checkProductId, checkProductBody, async (req, res) => {
    const { name, descrizione, price } = req.sanitizedData; // Il JSON contenuto nel corpo del messaggio inviato dal Client

    try {
        const product = await client.product.update({
            data: {
                name,
                descrizione,
                price
            },
            where: {
                id: Number(req.params.id)
            }
        });
        res.json({
            success: true,
            message: "Prodotto aggiornato",
            data: product
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
