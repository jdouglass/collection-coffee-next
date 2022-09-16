import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await prisma.products.findMany({
    select: {
      variety: true,
    },
  });
  return res.status(200).json(response);
}
