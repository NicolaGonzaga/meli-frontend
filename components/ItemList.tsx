import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "../utils/formatPrice";
import { Item } from "../types";
import styles from "./ItemList.module.css";

interface ItemListProps {
  items: Item[];
}
{
  /* TODO: logica if true shipping exibe icone caminhao */
}
const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className={styles.itemContainer}>
      <ul className={styles.itemList}>
        {items.map((item) => (
          <>
            <li className={styles.item} key={item.id}>
              <Link href={`/items/${item.id}`}>
                <Image
                  className={styles.image}
                  width={180}
                  height={180}
                  src={item.picture_url}
                  alt={item.title}
                />
              </Link>
              <div className={styles.itemDetails}>
                <p className={styles.itemPrice}>{formatPrice(item.price)}</p>
                <p className={styles.itemTitle}>{item.free_shipping}</p>
                <p className={styles.itemTitle}>{item.title}</p>
              </div>
            </li>
            <hr className={styles.hr} />
          </>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
