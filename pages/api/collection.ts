// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type ProductData = {
  id: number;
  brand: string;
  title: string;
  price: string;
  weight: number;
  process: string;
  process_category: string;
  variety: string[];
  country: string;
  continent: string;
  product_url: string;
  image_url: string;
  sold_out: boolean;
  date_added: Date;
  vendor: string;
  handle: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductData>
) {
  const query = req.query;
  // const data = await prisma.products.findMany();
  // return {
  //   props: {
  //     productsList: data,
  //   },
  // };
}
