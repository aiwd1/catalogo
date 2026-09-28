import { Router } from "express";
// Per ora i dati arrivano da un array in un file JS (niente database):
// l'export default del file è la lista dei prodotti { id, name, descrizione, price }
import products from '../data/db-store-completo.js';

const router = Router();

// GET /products → restituisce tutti i prodotti.
// Forma della risposta { success, message, data }: tutte le risposte dell'API
// hanno la stessa struttura, così il frontend sa sempre dove trovare i dati
// (in data) e se la richiesta è andata a buon fine (success).
router.get('/', (req, res) => {
    res.json({
        success: true,
        message: '',
        data: products
    });
});

export default router;
