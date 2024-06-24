import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoSearchOutline } from "react-icons/io5";
import styles from "./Search.module.css";

interface SearchProps {
  onSearch: (query: string) => void; // Função recebida via prop
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm); // Chamada à função recebida via prop
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
        />
        <div className={styles.searchIcon} onClick={handleSearch}>
          <IoSearchOutline />
        </div>
      </div>
    </form>
  );
};

export default Search;
