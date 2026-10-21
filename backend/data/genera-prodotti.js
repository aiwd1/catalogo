// backend/data/genera-prodotti.js
// Genera data/db-store-completo.js con 100 prodotti di prova.
// Lancialo dalla cartella backend con: node data/genera-prodotti.js
import { writeFileSync } from 'node:fs';

// Generatore pseudo-casuale con seed fisso (mulberry32): a parità di seed
// restituisce sempre la stessa sequenza, quindi tutti ottengono lo stesso file.
function createRandom(seed) {
    let state = seed;
    return function random() {
        state = (state + 0x6d2b79f5) | 0;
        let t = Math.imul(state ^ (state >>> 15), 1 | state);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

const random = createRandom(2026);

// Un elemento a caso da un array
function pick(list) {
    return list[Math.floor(random() * list.length)];
}

// Tipo di prodotto con fascia di prezzo [minimo, massimo]
const types = [
    { name: 'Mouse', min: 15, max: 120 },
    { name: 'Tastiera', min: 30, max: 220 },
    { name: 'Monitor', min: 120, max: 900 },
    { name: 'Cuffie', min: 25, max: 350 },
    { name: 'Webcam', min: 25, max: 200 },
    { name: 'Stampante', min: 80, max: 600 },
    { name: 'Router', min: 40, max: 300 },
    { name: 'Supporto Laptop', min: 15, max: 90 },
    { name: 'Microfono', min: 30, max: 300 },
    { name: 'Controller', min: 25, max: 180 },
    { name: 'Lampada', min: 15, max: 120 },
    { name: 'Casse', min: 30, max: 400 },
    { name: 'Hub USB', min: 12, max: 80 },
    { name: 'SSD', min: 35, max: 250 },
    { name: 'Tappetino', min: 8, max: 60 }
];

const models = ['Opale', 'Pulsar', 'Vortex', 'Polaris', 'Prisma', 'Ossidiana', 'Aquila', 'Glaciale', 'Solaris', 'Zefiro'];
const variants = ['Air', 'Core', 'Elite', 'One', 'Plus', 'Max', 'Ultra', 'Lite'];
const endings = ['1', '3', '5', '7', '9', 'Nero', 'Bianco Artico', 'Sabbia', 'Blu Oceano', 'Verde Salvia', 'Lavanda'];

// Frasi modulari: {name} viene sostituito dal nome del prodotto
const openings = [
    'Il prodotto {name} nasce per chi vuole qualità senza compromessi.',
    '{name} è pensato per chi lavora e si diverte ogni giorno al computer.',
    'Con {name} la scrivania diventa più comoda, ordinata ed efficiente.',
    '{name} unisce un design curato a prestazioni affidabili.'
];
const features = [
    'La struttura robusta resiste all\'uso quotidiano e si pulisce con un panno.',
    'La connessione wireless a bassa latenza garantisce una risposta immediata.',
    'Il consumo energetico ridotto allunga la durata e rispetta l\'ambiente.',
    'L\'installazione è semplice: si collega e funziona, senza driver da cercare.',
    'I materiali scelti sono leggeri ma resistenti, per portarlo ovunque.',
    'Le finiture opache evitano riflessi e impronte anche dopo molte ore.'
];
const closings = [
    'Una scelta ideale per lo smart working, lo studio e il tempo libero.',
    'È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.',
    'Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.'
];

const products = [];

for (let id = 1; id <= 100; id++) {
    const type = pick(types);
    const name = `${type.name} ${pick(models)} ${pick(variants)} ${pick(endings)}`;

    // Tre frasi: apertura, due caratteristiche diverse e chiusura
    const firstFeature = pick(features);
    let secondFeature = pick(features);
    while (secondFeature === firstFeature) {
        secondFeature = pick(features);
    }

    const descrizione = [
        pick(openings).replace('{name}', name),
        firstFeature,
        secondFeature,
        pick(closings)
    ].join(' ');

    // Prezzo nella fascia del tipo, con due decimali (di solito termina con ,99)
    const base = type.min + random() * (type.max - type.min);
    const price = Math.round(base) - 0.01;

    products.push({
        id,
        name,
        descrizione,
        price: Number(price.toFixed(2)),
        image: `/imgs/${id}.jpg`
    });
}

// Scrive il file nel formato: const db = [...]; export default db;
const items = products.map((product) => {
    return `    {
        id: ${product.id},
        name: ${JSON.stringify(product.name)},
        descrizione: ${JSON.stringify(product.descrizione)},
        price: ${product.price},
        image: ${JSON.stringify(product.image)}
    }`;
});

const content = `const db = [
${items.join(',\n')}
];

export default db;
`;

writeFileSync(new URL('./db-store-completo.js', import.meta.url), content);
console.log(`Creato db-store-completo.js con ${products.length} prodotti`);
