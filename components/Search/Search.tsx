"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import search from "../../public/search.png";
import styles from "./Search.module.css";
import Image from "next/image";

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
      router.push(`/items?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSearch}>
      <div className={styles.searchContainer}>
        <input
          className={styles.searchInput}
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar produtos"
          data-testid="search-input"
        />
        <div className={styles.searchIcon} onClick={handleSearch}>
          <Image src={search} alt="Lupa para pesquisa" width={16} height={16} />
        </div>
      </div>
    </form>
  );
};

export default Search;
