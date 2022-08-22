import Image from 'next/image';
import styles from './ProductCard.module.css';

export interface IProductCard {
  brand: string;
  title: string;
  price: string;
  weight: number;
  process: string;
  variety: Array<string>;
  country: string;
  product_url: string;
  image_url: string;
  sold_out: boolean;
  vendor: string;
}

const ProductCard: React.FC<IProductCard> = ({
  brand,
  title,
  price,
  weight,
  process,
  variety,
  country,
  product_url,
  image_url,
  sold_out,
  vendor,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <Image
            src={image_url}
            height={190}
            width={270}
            alt={`${brand} ${title} coffee beans`}
            objectFit="contain"
          />
        </div>
        <div className={styles.cardInfoContainer}>
          <div className={styles.soldBy}></div>
          <div className={styles.brandPrice}>
            <div className={styles.title}>
              <div className={styles.extraInfo}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
