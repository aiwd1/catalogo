import express from 'express';
import productsRouter from './routers/productsRouter.js';
import aiRouter from './routers/aiRouter.js';
import categoriesRouter from './routers/categoriesRouter.js';
import cors from 'cors';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const port = 3000;
const backendRoot = fileURLToPath(new URL('./', import.meta.url));

// CORS (Cross-Origin Resource Sharing)
// Il frontend (Vite, http://localhost:5173) e il backend (http://localhost:3000)
// girano su porte diverse, quindi per il browser sono "origini diverse".
// Per sicurezza il browser blocca le fetch verso un'altra origine, a meno che
// il server non risponda con l'header Access-Control-Allow-Origin.
// Il middleware cors() aggiunge questi header a ogni risposta e risponde anche
// alle richieste di "preflight" (OPTIONS) che il browser invia prima di
// alcune richieste (es. POST con JSON).
// Senza opzioni, cors() accetta richieste da QUALSIASI origine: comodo in
// sviluppo; in produzione si limita con cors({ origin: 'https://miosito.it' }).
// Va registrato PRIMA dei router, così vale per tutte le rotte.
app.use(cors());

// Questo middleware entra in gioco quando il client
// mi invia un messaggio DICENDOMI che è JSON
app.use(express.json());

// Le immagini dei prodotti sono mantenute nella cartella public/imgs della root.
app.use('/imgs', express.static(path.join(backendRoot, 'public', 'imgs')));

// Tutte le rotte definite in productsRouter partono dal prefisso /products
// (es. router.get('/') → GET http://localhost:3000/products)
app.use('/products', productsRouter);
app.use('/categories', categoriesRouter);
app.use('/ai', aiRouter);

// Gestore degli errori (4 parametri): risponde sempre con la forma { success, message, data }
// invece dell'HTML di default, così il frontend può fare response.json().
// Copre il JSON malformato (400, errore di express.json) e le eccezioni non gestite (500).
app.use((err, req, res, next) => {
    const status = err.status ?? err.statusCode ?? 500;
    if (status >= 500) {
        console.error(err);
    }
    res.status(status).json({
        success: false,
        message: status >= 500 ? 'Errore interno del server' : 'Richiesta non valida',
        data: null
    });
});

// Express 5: la callback di app.listen riceve un eventuale errore
// (es. porta già occupata, EADDRINUSE) invece di farlo esplodere altrove.
app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log(`Server running on port ${port}`);
    }
});
