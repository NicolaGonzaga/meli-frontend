"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useFetch } from "../../hooks/useFetch";
import { SearchResponse } from "../../types";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Header from "@/components/Header/Header";
import List from "@/components/List/List";
import "../globals.css";

const ItemsPage = () => {
  const searchParams = useSearchParams();
  const search = searchParams?.get("search") || "";
  const router = useRouter();

  const { data, loading, error } = useFetch<SearchResponse>(
    `/api/items?search=${encodeURIComponent(search)}`
  );

  const handleSearch = async (query: string) => {
    router.push(`/items?search=${encodeURIComponent(query)}`);
  };

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  if (error) {
    return <div className="error">Erro: {error}</div>;
  }

  return (
    <div>
      <Header onSearch={handleSearch} />
      <Breadcrumb categories={data?.categories || []} />
      <List items={data?.items || []} />
    </div>
  );
};

export default ItemsPage;
