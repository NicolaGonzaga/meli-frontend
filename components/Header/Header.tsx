"use client";

import React from "react";
import Search from "../Search/Search";
import logo from "../../public/logo.png";
import Image from "next/image";
import styles from "./Header.module.css";

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <header data-testid="header" className={styles.headerContainer}>
      <Image src={logo} alt="Logotipo Mercado Livre" width={50} height={32} />
      <Search onSearch={onSearch} />
    </header>
  );
};

export default Header;
