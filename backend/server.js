import express from 'express';
import productsRouter from './routers/productsRouter.js';
import cors from 'cors';

const app = express();
const port = 3000;

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

// Tutte le rotte definite in productsRouter partono dal prefisso /products
// (es. router.get('/') → GET http://localhost:3000/products)
app.use('/products', productsRouter);

// Express 5: la callback di app.listen riceve un eventuale errore
// (es. porta già occupata, EADDRINUSE) invece di farlo esplodere altrove.
app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log(`Server running on port ${port}`);
    }
});
