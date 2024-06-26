"use client";
import React from "react";
import { Item } from "../../types";
import styles from "./List.module.css";
import ItemList from "../ItemList/ItemList";

interface ListProps {
  items: Item[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <div id="list" className={styles.listContainer}>
      <ul className={styles.listItem}>
        {items.map((item, index) => (
          <React.Fragment key={item.id}>
            <ItemList item={item} />
            {index < items.length - 1 && <hr className={styles.hr} />}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default List;
