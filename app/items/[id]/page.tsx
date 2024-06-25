"use client";

import { useParams, useRouter } from "next/navigation";
import { useFetch } from "../../../hooks/useFetch";
import { ItemDetails } from "../../../types";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Header from "@/components/Header/Header";
import "../../globals.css";
import ProductDetail from "@/components/ProductDetail/ProductDetail";

const ItemDetail = () => {
  const params = useParams();
  const id = typeof params?.id === "string" ? params.id : "";
  const router = useRouter();

  const { data, loading, error } = useFetch<{ item: ItemDetails }>(
    `/api/items/${id}`
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

  if (!data?.item) {
    return <div className="error">Item não encontrado</div>;
  }

  return (
    <div>
      <Header onSearch={handleSearch} />
      <Breadcrumb categories={data?.item.categories || []} />
      <ProductDetail item={data?.item} />
    </div>
  );
};

export default ItemDetail;
