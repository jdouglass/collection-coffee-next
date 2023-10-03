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

    const limit = 12;
    const cursor = req.query.cursor ?? '';
    const cursorObj =
      cursor === '' ? undefined : { id: parseInt(cursor as string, 10) };

    type variety_string_query = { variety_string: { contains: string } }[];
    type tasting_notes_string_query = {
      tasting_notes_string: { contains: string };
    }[];

    let variety_string: variety_string_query = [];
    let tasting_notes_string: tasting_notes_string_query = [];

    if (req.query.Variety && Array.isArray(req.query.Variety)) {
      req.query.Variety.forEach((variety: string) => {
        variety_string.push({
          variety_string: {
            contains: variety,
          },
        });
      });
    } else if (req.query.Variety && !Array.isArray(req.query.Variety)) {
      variety_string.push({
        variety_string: {
          contains: req.query.Variety,
        },
      });
    }

    if (
      req.query['Tasting Notes'] &&
      Array.isArray(req.query['Tasting Notes'])
    ) {
      req.query['Tasting Notes'].forEach((variety: string) => {
        tasting_notes_string.push({
          tasting_notes_string: {
            contains: variety,
          },
        });
      });
    } else if (
      req.query['Tasting Notes'] &&
      !Array.isArray(req.query['Tasting Notes'])
    ) {
      tasting_notes_string.push({
        tasting_notes_string: {
          contains: req.query['Tasting Notes'],
        },
      });
    }

    const combinedVarietyTastingQuery: {
      variety_string?: { contains: string };
      tasting_notes_string?: { contains: string };
    }[] = [];

    variety_string.forEach((variety) => {
      combinedVarietyTastingQuery.push(variety);
    });
    tasting_notes_string.forEach((tasting_notes) => {
      combinedVarietyTastingQuery.push(tasting_notes);
    });

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
            vendor_location: {
              in: req.query['Vendor Location'],
            },
            AND: combinedVarietyTastingQuery,
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
        variety: product.variety_string as string,
        country: product.country,
        product_url: product.product_url,
        image_url: product.image_url,
        sold_out: product.sold_out,
        date_added: product.date_added,
        vendor: product.vendor,
        handle: product.handle,
        tasting_notes: product.tasting_notes_string as string,
        vendor_location: product.vendor_location as string,
        default_currency: product.default_currency as string,
      };
      products.push(addedProduct);
    }

    await prisma.$disconnect();

    return res.status(200).json(products);
  }
}
