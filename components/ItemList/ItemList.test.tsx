import React from "react";
import { render, screen } from "@testing-library/react";
import ItemList from "./ItemList";
import { formatPrice } from "../../utils/formatPrice";

const mockItem = {
  id: "1",
  title: "Mock Item",
  price: {
    currency: "BRL",
    amount: 100,
  },
  picture_url: "/mock-image.jpg",
  free_shipping: true,
  condition: "new",
};

describe("ItemList", () => {
  it("should render item details correctly", () => {
    render(<ItemList item={mockItem} />);

    const itemTitleElement = screen.getByText(mockItem.title);
    const formattedPrice = formatPrice(mockItem.price);

    const itemPriceElement = screen.queryAllByText((content, element) => {
      return element?.textContent === formattedPrice;
    });

    expect(itemTitleElement).not.toBeNull();
    expect(itemPriceElement).not.toBeNull();
  });

  it("should handle image correctly", () => {
    render(<ItemList item={mockItem} />);

    const imageElement = screen.getByAltText(
      mockItem.title
    ) as HTMLImageElement;

    expect(imageElement).not.toBeNull();
  });
});
