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
    <header className={styles.headerContainer}>
      <Image src={logo} alt="Logotipo Mercado Livre" className={styles.logo} />
      <Search onSearch={onSearch} />
    </header>
  );
};

export default Header;
