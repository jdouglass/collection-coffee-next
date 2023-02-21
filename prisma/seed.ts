import { PrismaClient, products } from '@prisma/client';
import axios from 'axios';

const prisma = new PrismaClient();

async function main() {
  await prisma.products.deleteMany({});
  const PROD_BASE_URL = process.env.PROD_BASE_URL as string;
  const products = await axios<products[]>(`${PROD_BASE_URL}/api/seedDb`);

  const addProducts: () => Promise<any> = async () =>
    await prisma.products.createMany({ data: products.data });

  await addProducts();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
