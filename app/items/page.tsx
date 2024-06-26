/**
 * Componente que renderiza a página de itens com Suspense para lidar com o carregamento assíncrono dos dados.
 *
 * Este componente envolve ItemsPage com Suspense, mostrando um indicador de carregamento enquanto os dados estão sendo buscados.
 *
 * Componente React que renderiza ItemsPage dentro de um Suspense boundary.
 */

"use client";
import React, { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useFetch } from "../../hooks/useFetch";
import { SearchResponse } from "../../types";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import Loading from "../../components/Loading/Loading";
import ErrorLoading from "../../components/ErrorLoading/ErrorLoading";
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
    return <Loading />;
  }

  if (error) {
    return <ErrorLoading message={error} />;
  }

  if (!data?.items) {
    return <ErrorLoading message="Item não encontrado" />;
  }

  return (
    <div data-testid="items-page">
      <Header onSearch={handleSearch} />
      <Breadcrumb categories={data?.categories || []} />
      <List items={data?.items || []} />
    </div>
  );
};

const ItemsPageWithSuspense = () => (
  <Suspense fallback={<Loading />}>
    <ItemsPage />
  </Suspense>
);

export default ItemsPageWithSuspense;
