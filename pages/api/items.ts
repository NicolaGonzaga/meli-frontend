import type { NextApiRequest, NextApiResponse } from "next";
import { Item, SearchResponse, RawResponse } from "../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { search } = req.query;

  if (!search || typeof search !== "string") {
    return res.status(400).json({ error: "Parâmetro de busca inválido" });
  }

  try {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?&q=${encodeURIComponent(
        search
      )}`
    );

    if (!response.ok) {
      throw new Error("A resposta do servidor não foi bem-sucedida.");
    }

    const data: RawResponse = await response.json();

    const items: Item[] = data.results.map((item) => ({
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
      },
      picture_url: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
    }));

    const categories =
      data.filters
        .find((filter) => filter.id === "category")
        ?.values[0].path_from_root.map((cat) => cat.name) || [];

    const searchResponse: SearchResponse = {
      query: search,
      categories,
      items,
    };

    res.status(200).json(searchResponse);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar os itens" });
  }
}
