import React from "react";
import { render, screen } from "@testing-library/react";
import List from "./List";
import { formatPrice } from "../../utils/formatPrice";

interface Item {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
  };
  picture_url: string;
  free_shipping: boolean;
  condition: string;
}

const mockItems: Item[] = [
  {
    id: "1",
    title: "Mock Item 1",
    price: { currency: "BRL", amount: 100 },
    picture_url: "/mock-image-1.jpg",
    free_shipping: true,
    condition: "new",
  },
  {
    id: "2",
    title: "Mock Item 2",
    price: { currency: "BRL", amount: 150 },
    picture_url: "/mock-image-2.jpg",
    free_shipping: false,
    condition: "used",
  },
];

describe("List", () => {
  it("renders list items correctly", () => {
    render(<List items={mockItems} />);

    mockItems.forEach((item) => {
      const itemTitleElement = screen.getByText(item.title);
      const expectedPrice = formatPrice(item.price);

      const priceElements = screen.queryAllByText((content, element) => {
        if (!element) return false;
        const hasText = (element: Element) =>
          element.textContent === expectedPrice;
        return hasText(element);
      });

      // Verifica se pelo menos um dos elementos encontrados corresponde ao preço formatado esperado
      const itemPriceElement =
        priceElements.length > 0 ? priceElements[0] : null;

      expect(itemTitleElement).not.toBeNull();
      expect(itemPriceElement).not.toBeNull();
    });
  });
});
