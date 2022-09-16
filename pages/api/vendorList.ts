import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await prisma.products.findMany({
    select: {
      vendor: true,
    },
    distinct: ['vendor'],
    orderBy: { vendor: 'asc' },
  });
  return res.status(200).json(response);
}
