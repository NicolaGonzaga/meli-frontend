"use client";

import { useParams, useRouter } from "next/navigation";
import { useFetch } from "../../../hooks/useFetch";
import { ItemDetails } from "../../../types";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Header from "@/components/Header/Header";
import ProductDetail from "@/components/ProductDetail/ProductDetail";
import Loading from "@/components/Loading/Loading";
import ErrorLoading from "@/components/ErrorLoading/ErrorLoading";

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
    return <Loading />;
  }

  if (error) {
    return <ErrorLoading message={error} />;
  }

  if (!data?.item) {
    return <ErrorLoading message="Item não encontrado" />;
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
