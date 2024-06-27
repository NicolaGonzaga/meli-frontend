import { describe, it, expect, vi, beforeAll } from "vitest";
import { NextApiRequest, NextApiResponse } from "next";
import handler from "./[id]"; 

describe("API Handler", () => {
  beforeAll(() => {
    global.fetch = vi.fn(); // Mock global fetch
  });

  it("should return 400 if id parameter is missing or invalid", async () => {
    const req = {
      query: {},
    } as NextApiRequest;

    const json = vi.fn();
    const status = vi.fn(() => ({ json }));
    const res = { status } as unknown as NextApiResponse;

    await handler(req, res);

    expect(status).toBeCalledWith(400);
    expect(json).toBeCalledWith({ error: "Parâmetro de ID inválido" });
  });

  it("should return 200 and the item details", async () => {
    const req = {
        query: { id: "123" },
    } as unknown as NextApiRequest;

    const mockItemData = {
      id: "123",
      title: "Item 123",
      price: 200,
      currency_id: "BRL",
      pictures: [{ url: "http://example.com/image.jpg" }],
      condition: "new",
      shipping: { free_shipping: true },
      sold_quantity: 10,
      category_id: "cat123",
    };

    const mockDescriptionData = {
      plain_text: "Descrição do item 123",
    };

    const mockCategoryData: CategoryData = {
      path_from_root: [
        { id: "cat1", name: "Category 1" },
        { id: "cat2", name: "Category 2" },
      ],
    };

    (global.fetch as vi.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockItemData),
    });

    (global.fetch as vi.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockDescriptionData),
    });

    (global.fetch as vi.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockCategoryData),
    });

    const json = vi.fn();
    const status = vi.fn(() => ({ json }));
    const res = { status } as unknown as NextApiResponse;

    await handler(req, res);

    expect(status).toBeCalledWith(200);
    expect(json).toBeCalledWith({
      item: {
        id: "123",
        title: "Item 123",
        price: {
          currency: "BRL",
          amount: 200,
        },
        picture_url: "http://example.com/image.jpg",
        condition: "new",
        free_shipping: true,
        sold_qty: 10,
        description: "Descrição do item 123",
        categories: ["Category 1", "Category 2"],
      },
    });
  });

  it("should return 500 if fetch fails", async () => {
    const req = {
        query: { id: "123" },
    } as unknown as NextApiRequest;

    (global.fetch as vi.Mock).mockRejectedValueOnce(new Error("Fetch failed"));

    const json = vi.fn();
    const status = vi.fn(() => ({ json }));
    const res = { status } as unknown as NextApiResponse;

    await handler(req, res);

    expect(status).toBeCalledWith(500);
    expect(json).toBeCalledWith({
      error: "Erro ao buscar os detalhes do item",
    });
  });
});
