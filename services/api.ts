export const fetchItems = async (search: string) => {
  const response = await fetch(
    `/api/items?search=${encodeURIComponent(search)}`
  );
  return response.json();
};

export const fetchItemDetails = async (id: string) => {
  const response = await fetch(`/api/items/${id}`);
  return response.json();
};
