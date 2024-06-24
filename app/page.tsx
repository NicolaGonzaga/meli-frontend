"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import styles from "./page.module.css";
import "./globals.css";

interface Item {
  id: string;
  title: string;
}

const Home: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const response = await fetch(`/api/items?search=${query}`);
      if (!response.ok) {
        throw new Error("Failed to fetch items");
      }
      const data = await response.json();
      setItems(data.items);
    } catch (error) {
      console.error("Error fetching items", error);
    }
  };

  return (
    <>
      <div className={styles.main}>
        <Header onSearch={handleSearch} />
        <h1>Home</h1>
      </div>
    </>
  );
};

export default Home;
