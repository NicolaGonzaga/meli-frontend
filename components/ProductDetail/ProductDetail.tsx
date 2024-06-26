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
  const translateCondition = (condition: string | undefined) => {
    switch (condition?.toLowerCase()) {
      case "new":
        return "Novo";
      case "used":
        return "Usado";
      default:
        return condition;
    }
  };

  return (
    <div data-testid="product-detail" className={styles.productContainer}>
      <div className={styles.productDetail}>
        <div className={styles.productImage}>
          <Image
            layout="intrinsic"
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
          <Button label="Comprar" />
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
