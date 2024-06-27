"use client";

import React from "react";
import Search from "../Search/Search";
import logo from "../../public/logo.png";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <header data-testid="header" className={styles.headerContainer}>
      <Link href="/">
        <Image src={logo} alt="Logotipo Mercado Livre" width={50} height={32} />
      </Link>
      <Search onSearch={onSearch} />
    </header>
  );
};

export default Header;
