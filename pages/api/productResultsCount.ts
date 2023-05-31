import { Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { FilterCategory } from '../../lib/enums/filterCategory';
import { IProductCountResponse } from '../../lib/IProductCountResponse';
import { prisma } from '../../lib/prisma';

function countKeyOccurrences(
  productResponse: IProductCountResponse[],
  key: string
) {
  if (key === 'variety' || key === 'tasting_notes') {
    const newProductResponse = productResponse
      .map((value) => {
        return value[key].map((value) => {
          return {
            [key]: value,
          };
        });
      })
      .flat(1);
    return newProductResponse.reduce(function (sums, entry) {
      (sums as any)[entry[key]] = ((sums as any)[entry[key]] || 0) + 1;
      return sums;
    }, {});
  }
  return productResponse.reduce(function (sums, entry) {
    (sums as any)[(entry as any)[key]] =
      ((sums as any)[(entry as any)[key]] || 0) + 1;
    return sums;
  }, {});
}

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

    const tasting_notes = req.query['Tasting Notes']
      ? Prisma.validator<Prisma.StringNullableListFilter>()({
          hasSome: req.query['Tasting Notes'],
        })
      : undefined;

    const filteredProductResponse = await prisma.products.findMany({
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
            vendor_location: {
              in: req.query['Vendor Location'],
            },
          },
        ],
      },
      select: {
        brand: true,
        vendor: true,
        process_category: true,
        country: true,
        variety: true,
        tasting_notes: true,
        vendor_location: true,
      },
    });

    const allProductResponse = await prisma.products.findMany({
      select: {
        brand: true,
        vendor: true,
        process_category: true,
        country: true,
        variety: true,
        tasting_notes: true,
        vendor_location: true,
      },
    });
    await prisma.$disconnect();

    const newCounts = {
      total: filteredProductResponse.length,
      roaster:
        Object.keys(req.query).length <= 1
          ? Object.keys(req.query)[0] === FilterCategory.Roaster
            ? countKeyOccurrences(allProductResponse, 'brand')
            : countKeyOccurrences(filteredProductResponse, 'brand')
          : countKeyOccurrences(filteredProductResponse, 'brand'),
      vendor:
        Object.keys(req.query).length <= 1
          ? Object.keys(req.query)[0] === FilterCategory.Vendor
            ? countKeyOccurrences(allProductResponse, 'vendor')
            : countKeyOccurrences(filteredProductResponse, 'vendor')
          : countKeyOccurrences(filteredProductResponse, 'vendor'),
      process_category:
        Object.keys(req.query).length <= 1
          ? Object.keys(req.query)[0] === FilterCategory.Process
            ? countKeyOccurrences(allProductResponse, 'process_category')
            : countKeyOccurrences(filteredProductResponse, 'process_category')
          : countKeyOccurrences(filteredProductResponse, 'process_category'),
      country:
        Object.keys(req.query).length <= 1
          ? Object.keys(req.query)[0] === FilterCategory.Country
            ? countKeyOccurrences(allProductResponse, 'country')
            : countKeyOccurrences(filteredProductResponse, 'country')
          : countKeyOccurrences(filteredProductResponse, 'country'),
      variety:
        Object.keys(req.query).length <= 1
          ? Object.keys(req.query)[0] === FilterCategory.Variety
            ? countKeyOccurrences(allProductResponse, 'variety')
            : countKeyOccurrences(filteredProductResponse, 'variety')
          : countKeyOccurrences(filteredProductResponse, 'variety'),
      tasting_notes:
        Object.keys(req.query).length <= 1
          ? Object.keys(req.query)[0] === FilterCategory.TastingNotes
            ? countKeyOccurrences(allProductResponse, 'tasting_notes')
            : countKeyOccurrences(filteredProductResponse, 'tasting_notes')
          : countKeyOccurrences(filteredProductResponse, 'tasting_notes'),
      vendor_location:
        Object.keys(req.query).length <= 1
          ? Object.keys(req.query)[0] === FilterCategory.VendorLocation
            ? countKeyOccurrences(allProductResponse, 'vendor_location')
            : countKeyOccurrences(filteredProductResponse, 'vendor_location')
          : countKeyOccurrences(filteredProductResponse, 'vendor_location'),
    };

    return res.status(200).json(newCounts);
  }
}
