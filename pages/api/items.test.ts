import { describe, it, expect, vi, beforeAll } from "vitest";
import { NextApiRequest, NextApiResponse } from "next";
import handler from "./items";
import { RawResponse } from "../../types";

describe("API Handler", () => {
  beforeAll(() => {
    global.fetch = vi.fn(); 
  });

  it("should return 400 if search parameter is missing or invalid", async () => {
    const req = {
      query: {},
    } as NextApiRequest;

    const json = vi.fn();
    const status = vi.fn(() => ({ json }));
    const res = { status } as unknown as NextApiResponse;

    await handler(req, res);

    expect(status).toBeCalledWith(400);
    expect(json).toBeCalledWith({ error: "Parâmetro de busca inválido" });
  });

  it("should return 200 and the search results", async () => {
    const req = {
        query: { search: "test" },
    } as unknown as NextApiRequest;

    const mockData: RawResponse = {
      results: [
        {
          id: "1",
          title: "Item 1",
          price: 100,
          currency_id: "BRL",
          thumbnail: "http://example.com/image.jpg",
          condition: "new",
          shipping: {
            free_shipping: true,
          },
        },
      ],
      filters: [
        {
          id: "category",
          values: [
            {
              path_from_root: [{ name: "Category 1" }, { name: "Category 2" }],
            },
          ],
        },
      ],
    };

    (global.fetch as vi.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    const json = vi.fn();
    const status = vi.fn(() => ({ json }));
    const res = { status } as unknown as NextApiResponse;

    await handler(req, res);

    expect(status).toBeCalledWith(200);
    expect(json).toBeCalledWith({
      query: "test",
      categories: ["Category 1", "Category 2"],
      items: [
        {
          id: "1",
          title: "Item 1",
          price: {
            currency: "BRL",
            amount: 100,
          },
          picture_url: "http://example.com/image.jpg",
          condition: "new",
          free_shipping: true,
        },
      ],
    });
  });

  it("should return 500 if fetch fails", async () => {
    const req = {
        query: { search: "test" },
    } as unknown as NextApiRequest;

    (global.fetch as vi.Mock).mockRejectedValueOnce(new Error("Fetch failed"));

    const json = vi.fn();
    const status = vi.fn(() => ({ json }));
    const res = { status } as unknown as NextApiResponse;

    await handler(req, res);

    expect(status).toBeCalledWith(500);
    expect(json).toBeCalledWith({ error: "Erro ao buscar os itens" });
  });
});
