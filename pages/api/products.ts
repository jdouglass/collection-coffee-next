import { Prisma, PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { IProduct } from '../../lib/IProduct';
const prisma = new PrismaClient();

export default async function fetchProducts(
  req: NextApiRequest,
  res: NextApiResponse<IProduct[]>
) {
  if (req.method === 'GET') {
    type OrderByDate = {
      date_added: string;
    };

    type OrderByPrice = {
      price: string;
    };
    const orderByQuery =
      req.query.sort === 'newest'
        ? Prisma.validator<OrderByDate>()({ date_added: 'desc' })
        : req.query.sort === 'oldest'
        ? Prisma.validator<OrderByDate>()({ date_added: 'asc' })
        : req.query.sort === 'descending'
        ? Prisma.validator<OrderByPrice>()({ price: 'desc' })
        : req.query.sort === 'ascending'
        ? Prisma.validator<OrderByPrice>()({ price: 'asc' })
        : Prisma.validator<OrderByDate>()({ date_added: 'desc' });

    const variety = req.query.Variety
      ? Prisma.validator<Prisma.StringNullableListFilter>()({
          hasSome: req.query.Variety,
        })
      : undefined;

    const limit = 12;
    const cursor = req.query.cursor ?? '';
    const cursorObj =
      cursor === '' ? undefined : { id: parseInt(cursor as string, 10) };

    const products: IProduct[] = await prisma.products.findMany({
      skip: cursor !== '' ? 1 : 0,
      cursor: cursorObj,
      take: limit,
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
      orderBy: [orderByQuery],
    });

    return res.status(200).json(products);
  }
}
