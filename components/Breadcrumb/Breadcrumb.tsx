import React from "react";
import styles from "./Breadcrumb.module.css";

interface BreadcrumbProps {
  categories: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ categories }) => {
  return (
    <nav data-testid="breadcrumb" className={styles.breadContainer}>
      {categories.map((category, index) => (
        <span key={index}>
          {category}
          {index < categories.length - 1 && " >\u00A0"}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
