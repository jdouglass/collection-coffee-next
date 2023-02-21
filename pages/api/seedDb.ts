import { PrismaClient, products } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
const prisma = new PrismaClient();

export default async function seedDb(
  req: NextApiRequest,
  res: NextApiResponse<products[]>
) {
  if (req.method === 'GET') {
    const productsResponse = await prisma.products.findMany({
      take: 50,
    });

    await prisma.$disconnect();

    return res.status(200).json(productsResponse);
  }
}
