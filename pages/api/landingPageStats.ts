import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';

export default async function getLandingPageStats(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const totalProducts = await prisma.products.count();
    const totalVendors = await prisma.products.groupBy({
      by: ['vendor'],
    });
    const totalRoasters = await prisma.products.groupBy({
      by: ['brand'],
    });
    return res.status(200).json({
      totalProducts: totalProducts,
      totalVendors: totalVendors.length,
      totalRoasters: totalRoasters.length,
    });
  } catch (err) {
    return res.status(400).send('Bad Request');
  }
}
