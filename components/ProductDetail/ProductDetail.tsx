import React from "react";
import Image from "next/image";
import { formatPrice } from "../../utils/formatPrice";
import { ItemDetails } from "../../types";
import Button from "../Button/Button";
import styles from "./ProductDetail.module.css";

interface ProductDetailProps {
  item: ItemDetails;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ item }) => {
  return (
    <div className={styles.productContainer}>
      <div className={styles.productDetail}>
        <div className={styles.productImage}>
          <Image
            width={680}
            height={600}
            src={item.picture_url || ""}
            alt={item.title || "Item image"}
          />
        </div>
        <div className={styles.productInfo}>
          <p>{item.condition}</p>
          <h3>{item.title}</h3>
          {item.price && <p>{formatPrice(item.price)}</p>}
          <Button label="Comprar" />
        </div>
      </div>
      <div className={styles.productDescription}>
        <h2>Descrição do produto </h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
