import { Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';

export default async function getProductResultsCount(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const variety = req.query.Variety
      ? Prisma.validator<Prisma.StringNullableListFilter>()({
          hasSome: req.query.Variety,
        })
      : undefined;

    const productCount = await prisma.products.count({
      where: {
        AND: [
          {
            vendor: {
              in: req.query.Vendor,
            },
            process_category: {
              in: req.query.Process,
            },
            country: {
              in: req.query.Country,
            },
            variety,
          },
        ],
      },
    });
    await prisma.$disconnect();

    return res.status(200).json(productCount);
  }
}
