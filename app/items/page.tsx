"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useFetch } from "../../hooks/useFetch";
import { SearchResponse } from "../../types";
import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/components/Header";
import ItemList from "@/components/ItemList";
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Header onSearch={handleSearch} />
      <Breadcrumb categories={data?.categories || []} />
      <ItemList items={data?.items || []} />
    </div>
  );
};

export default ItemsPage;
