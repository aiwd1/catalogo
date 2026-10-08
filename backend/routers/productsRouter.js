import { Router } from "express";
// Per ora i dati arrivano da un array in un file JS (niente database):
// l'export default del file è la lista dei prodotti { id, name, descrizione, price }
//import products from '../data/db-store-completo.js';
import { client } from '../prisma-client.js';

const router = Router();

// GET /products → restituisce tutti i prodotti.
// Forma della risposta { success, message, data }: tutte le risposte dell'API
// hanno la stessa struttura, così il frontend sa sempre dove trovare i dati
// (in data) e se la richiesta è andata a buon fine (success).

// http://localhost:3000/products?page=N&limit=M
// http://localhost:3000/products?page=1&limit=20
// http://localhost:3000/products?search=mouse&page=1&limit=20
router.get('/', async (req, res) => {
    const search = (req.query.search || '').trim();
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const total = await client.product.count({
        where: {
            name: {
                contains: search
            }
        },
    }); // Il numero di record che rispettano il filtro

    const products = await client.product.findMany({
        where: {
            name: {
                contains: search
            }
        },
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

router.get('/:id', async (req, res) => {
    const id = Number(req.params.id);

    const product = await client.product.findUnique({
        where: {
            id: id
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
router.post('/', async (req, res) => {
    const { name, descrizione, price } = req.body ?? {}; // Il JSON contenuto nel corpo del messaggio inviato dal Client

    // Prima si controlla il body (400), poi si scrive nel database
    if (typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({
            success: false,
            message: 'name è obbligatorio',
            data: null
        });
    }

    if (descrizione !== undefined && typeof descrizione !== 'string') {
        return res.status(400).json({
            success: false,
            message: 'descrizione deve essere una stringa',
            data: null
        });
    }

    // Number('abc') è NaN e NaN <= 0 è false: serve il controllo separato con Number.isNaN()
    if (price === undefined || price === null || price === '' || Number.isNaN(Number(price)) || Number(price) <= 0) {
        return res.status(400).json({
            success: false,
            message: 'price è obbligatorio e deve essere un numero maggiore di 0',
            data: null
        });
    }

    const product = await client.product.create({
        data: {
            name: name.trim(),
            descrizione: descrizione ?? '',
            price: Number(price)
        }
    });

    res.status(201).json({
        success: true,
        message: '',
        data: product
    });
});

// DELETE /producsts/9 Voglio rimuovere il prodotto con id 1
router.delete('/:id', async (req, res) => {
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
