"use client";

import { useParams, useRouter } from "next/navigation";
import { useFetch } from "../../../hooks/useFetch";
import { ItemDetails } from "../../../types";
import styles from "../../../components/ItemDetail.module.css";
import Image from "next/image";
import { formatPrice } from "../../../utils/formatPrice";
import Breadcrumb from "@/components/Breadcrumb";
import "../../globals.css";
import Header from "@/components/Header";

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.itemDetailContainer}>
      <Header onSearch={handleSearch} />
      <Breadcrumb categories={data?.item.categories || []} />
      <h1>{data?.item.title}</h1>
      <Image
        width={300}
        height={300}
        src={data?.item.picture_url || ""}
        alt={data?.item.title || "Item image"}
      />
      {data?.item.price && <p>Price: {formatPrice(data?.item.price)}</p>}
      <p>Condition: {data?.item.condition}</p>
      <p>Description: {data?.item.description}</p>
    </div>
  );
};

export default ItemDetail;
