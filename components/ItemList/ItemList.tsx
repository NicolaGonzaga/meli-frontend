import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "../../utils/formatPrice";
import { Item } from "../../types";
import styles from "./ItemList.module.css";

interface ItemListProps {
  item: Item;
}

const ItemList: React.FC<ItemListProps> = ({ item }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div key={item.id}>
      <li className={styles.itemContainer}>
        <Link href={`/items/${item.id}`}>
          <Image
            className={styles.image}
            width={180}
            height={180}
            src={item.picture_url}
            alt={item.title}
            onError={handleImageError}
          />
        </Link>
        <div className={styles.itemList}>
          <div className={styles.itemDetails}>
            <p className={styles.itemPrice}>{formatPrice(item.price)}</p>
            {item.free_shipping && (
              <>
                {!imageError ? (
                  <Image
                    src="/free_shipping.png"
                    alt="Frete grátis"
                    className={styles.shippingIcon}
                    width={20}
                    height={20}
                  />
                ) : (
                  <p className={styles.shippingError}>Frete grátis</p>
                )}
              </>
            )}
          </div>
          <div className={styles.itemTitle}>{item.title}</div>
        </div>
        {/* <div className={styles.itemText}>
          <p>Sāo Paulo</p>
        </div> */}
      </li>
    </div>
  );
};

export default ItemList;
