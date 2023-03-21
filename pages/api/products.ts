import { Prisma, PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { IProduct } from '../../lib/IProduct';
const prisma = new PrismaClient();

export default async function getProducts(
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

    const tasting_notes = req.query['Tasting Notes']
      ? Prisma.validator<Prisma.StringNullableListFilter>()({
          hasSome: req.query['Tasting Notes'],
        })
      : undefined;

    const limit = 12;
    const cursor = req.query.cursor ?? '';
    const cursorObj =
      cursor === '' ? undefined : { id: parseInt(cursor as string, 10) };

    const productsResponse = await prisma.products.findMany({
      skip: cursor !== '' ? 1 : 0,
      cursor: cursorObj,
      take: limit,
      where: {
        AND: [
          {
            brand: {
              in: req.query.Roaster,
            },
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
            tasting_notes,
          },
        ],
      },
      orderBy: [orderByQuery],
    });

    let products: Array<IProduct> = [];
    for (const product of productsResponse) {
      const addedProduct: IProduct = {
        id: product.id,
        brand: product.brand,
        title: product.title,
        weight: product.weight,
        price: product.price.toFixed(2),
        process: product.process,
        variety: product.variety,
        country: product.country,
        product_url: product.product_url,
        image_url: product.image_url,
        sold_out: product.sold_out,
        date_added: product.date_added,
        vendor: product.vendor,
        handle: product.handle,
        tasting_notes: product.tasting_notes,
      };
      products.push(addedProduct);
    }

    await prisma.$disconnect();

    return res.status(200).json(products);
  }
}
