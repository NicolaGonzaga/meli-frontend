import { useFetch } from "./useFetch";
import { ItemDetails } from "../types";

export const useItemDetails = (id: string) => {
  return useFetch<{ item: ItemDetails }>(`/api/items/${id}`);
};
