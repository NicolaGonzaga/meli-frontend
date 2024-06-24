import type { NextApiRequest, NextApiResponse } from "next";

interface CategoryData {
  path_from_root: { id: string; name: string }[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "Parâmetro de ID inválido" });
  }

  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const itemData = await response.json();
    const descriptionResponse = await fetch(
      `https://api.mercadolibre.com/items/${id}/description`
    );
    const descriptionData = await descriptionResponse.json();
    const categoryId = itemData.category_id;

    const categoryResponse = await fetch(
      `https://api.mercadolibre.com/categories/${categoryId}`
    );
    const categoryData: CategoryData = await categoryResponse.json();

    const item = {
      id: itemData.id,
      title: itemData.title,
      price: {
        currency: itemData.currency_id,
        amount: itemData.price,
      },
      picture_url: itemData.pictures[0].url,
      condition: itemData.condition,
      free_shipping: itemData.shipping.free_shipping,
      sold_qty: itemData.sold_quantity,
      description: descriptionData.plain_text,
      categories: categoryData.path_from_root.map((category) => category.name),
    };

    res.status(200).json({ item });
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar os detalhes do item" });
  }
}
