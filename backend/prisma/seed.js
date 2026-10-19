import { client } from '../prisma-client.js';
import productsLocal from '../data/db-store-completo.js';

const dataProduct = productsLocal.map(({ name, descrizione, price, image }) => ({
  name,
  descrizione,
  price,
  image
}));

// deleteMany svuota le tabelle (la tabella ponte si svuota da sola grazie a Cascade)
await client.product.deleteMany();
await client.category.deleteMany();

// deleteMany non riporta il contatore degli id a 1: lo facciamo noi, così gli id
// (e gli esempi come ?category=2) tornano uguali a ogni seed
await client.$executeRaw`ALTER TABLE Product AUTO_INCREMENT = 1`;
await client.$executeRaw`ALTER TABLE Category AUTO_INCREMENT = 1`;
await client.$executeRaw`ALTER TABLE ProductCategory AUTO_INCREMENT = 1`;

// Creo i prodotti
const result = await client.product.createMany({ data: dataProduct });
console.log(`Inseriti ${result.count} prodotti`);

// Creo qualche categoria
const categoryNames = [
  'Elettronica',
  'Informatica',
  'Casa',
  'Sport',
  'Accessori'
];
const dataCategory = categoryNames.map((name) => ({ name }));

const resultCategories = await client.category.createMany({ data: dataCategory });
console.log(`Inserite ${resultCategories.count} categorie`);

// Restituisce gli id di `count` categorie scelte a caso, tutte diverse tra loro.
// Prisma non ha un orderBy casuale: leggiamo gli id e li mescoliamo in JavaScript.
// sort con Math.random() - 0.5 restituisce a caso un numero positivo o negativo,
// quindi l'ordine finale è casuale; slice tiene solo i primi `count`.
async function pickRandomCategoryIds(count) {
  const categories = await client.category.findMany({ select: { id: true } });

  return categories
    .map((category) => category.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}

const products = await client.product.findMany({ select: { id: true } });
const categoryCount = await client.category.count();

// Un'unica lista di collegamenti, salvata con un solo createMany
const links = [];

for (const product of products) {
  // numero a caso da 0 a categoryCount compresi: qualche prodotto resta senza categorie
  const attachedCategoryCount = Math.floor(Math.random() * (categoryCount + 1));

  const attachedCategoryIds = await pickRandomCategoryIds(attachedCategoryCount);

  for (const categoryId of attachedCategoryIds) {
    links.push({ productId: product.id, categoryId });
  }
}

const resultLinks = await client.productCategory.createMany({ data: links });
console.log(`Inseriti ${resultLinks.count} collegamenti`);

await client.$disconnect();
