import { client } from '../prisma-client.js';
import productsLocal from '../data/db-store-completo.js';

const dataProduct = productsLocal.map(({ name, descrizione, price }) => ({
  name,
  descrizione,
  price
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

const products = await client.product.findMany({ select: { id: true } });
const categories = await client.category.findMany({ select: { id: true } });

// Un'unica lista di collegamenti, salvata con un solo createMany
const links = [];

for (let i = 0; i < products.length; i++) {
  const productId = products[i].id;

  // un prodotto ogni due ha 3 categorie, gli altri 1
  const attachedCategoryCount = i % 2 === 1 ? 3 : 1;

  // il Set evita di scegliere due volte la stessa categoria per lo stesso prodotto
  const attachedCategoryIds = new Set();

  while (attachedCategoryIds.size < attachedCategoryCount) {
    const randomCategoryIndex = Math.floor(Math.random() * categories.length); // da 0 a categories.length - 1
    attachedCategoryIds.add(categories[randomCategoryIndex].id);
  }

  for (const categoryId of attachedCategoryIds) {
    links.push({ productId, categoryId });
  }
}

const resultLinks = await client.productCategory.createMany({ data: links });
console.log(`Inseriti ${resultLinks.count} collegamenti`);

await client.$disconnect();
