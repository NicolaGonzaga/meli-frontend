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
  const translateCondition = (condition: string) => {
    switch (condition.toLowerCase()) {
      case "new":
        return "Novo";
      case "used":
        return "Usado";
      default:
        return condition;
    }
  };

  return (
    <div className={styles.productContainer}>
      <div className={styles.productDetail}>
        <div className={styles.productImage}>
          <Image
            width={680}
            height={680}
            src={item.picture_url || ""}
            alt={item.title || "Item image"}
          />
        </div>
        <div className={styles.productInfo}>
          <p className={styles.productCondition}>
            {translateCondition(item.condition)}
          </p>
          <h3 className={styles.productTitle}>{item.title}</h3>
          {item.price && (
            <p className={styles.productPrice}>{formatPrice(item.price)}</p>
          )}
          <div className={styles.productButton}>
            <Button label="Comprar" />
          </div>
        </div>
      </div>
      <div className={styles.productDescription}>
        <p className={styles.titleDescription}>Descrição do produto </p>
        <p className={styles.paragraphDescription}>{item.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
