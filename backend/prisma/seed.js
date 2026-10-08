import { client } from '../prisma-client.js';
import products from '../data/db-store-completo.js';

const data = products.map(({ name, descrizione, price }) => ({
  name,
  descrizione,
  price
}));

await client.product.deleteMany();
const result = await client.product.createMany({ data });

console.log(`Inseriti ${result.count} prodotti`);
await client.$disconnect();