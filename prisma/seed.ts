import { faker } from '@faker-js/faker';
import { Prisma, PrismaClient, products } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.products.deleteMany({});

  const totalProducts = 50;
  const processList = ['Washed', 'Natural', 'Honey', 'Experimental'];
  const continentList = [
    'Asia',
    'Europe',
    'North America',
    'South America',
    'Africa',
  ];
  const products: products[] = [];

  for (let i = 0; i < totalProducts; i++) {
    const country = faker.address.country();

    const product: products = {
      id: i,
      brand: faker.company.bsBuzz(),
      continent: faker.helpers.arrayElement(continentList),
      country,
      date_added: new Date(
        faker.date.between(
          '2020-01-01T00:00:00.000Z',
          '2022-12-30T00:00:00.000Z'
        )
      ),
      handle: faker.lorem.slug(),
      image_url: faker.image.imageUrl(),
      sold_out: faker.datatype.boolean(),
      price: new Prisma.Decimal(Number(faker.commerce.price(10, 75, 2))),
      process: faker.helpers.arrayElement(processList),
      process_category: faker.helpers.arrayElement(processList),
      product_url: faker.internet.url(),
      title: faker.random.words(5),
      variety: faker.helpers.arrayElements(),
      vendor: faker.company.bsBuzz(),
      weight: Number(faker.random.numeric(3)),
    };

    products.push(product);
  }

  const addProducts: () => Promise<any> = async () =>
    await prisma.products.createMany({ data: products });

  await addProducts();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
