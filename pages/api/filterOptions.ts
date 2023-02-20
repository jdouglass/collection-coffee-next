import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';

export default async function getFilterOptions(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { category } = req.query;
  if (
    category === 'vendor' ||
    category === 'variety' ||
    category === 'country'
  ) {
    const response = await prisma.products.findMany({
      select: {
        [category]: true,
      },
      distinct: [category],
      orderBy: { [category]: 'asc' },
    });
    return res.status(200).json(response.flat());
  } else if (category === 'process') {
    const response = await prisma.products.findMany({
      select: {
        process_category: true,
      },
      distinct: ['process_category'],
      orderBy: { process_category: 'asc' },
    });
    return res.status(200).json(response);
  }
  return res.status(400).send('Bad Request');
}
