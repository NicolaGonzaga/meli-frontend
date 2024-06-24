export interface Item {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
  };
  picture_url: string;
  condition: string;
  free_shipping: boolean;
}

export interface ItemDetails extends Item {
  sold_qty: number;
  description: string;
  categories: string[];
}

export interface RawResponse {
  results: RawItem[];
  filters: Array<{
    id: string;
    values: Array<{
      path_from_root: Array<{
        name: string;
      }>;
    }>;
  }>;
}

export interface RawItem {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  thumbnail: string;
  condition: string;
  shipping: {
    free_shipping: boolean;
  };
}

export interface SearchResponse {
  query: string;
  categories: string[];
  items: Item[];
}
