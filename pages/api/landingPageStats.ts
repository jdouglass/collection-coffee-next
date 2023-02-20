import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';

export default async function getLandingPageStats(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { type } = req.query;
  if (!type) {
    const response = await prisma.products.count();
    return res.status(200).json(response);
  } else if (type === 'vendor' || type === 'brand') {
    const response = await prisma.products.groupBy({
      by: [type],
    });
    return res.status(200).json(response.length);
  }
  return res.status(400).send('Bad Request');
}
