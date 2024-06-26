import React from "react";
import { render, screen } from "@testing-library/react";
import ProductDetail from "./ProductDetail";
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
  description: "This is a mock item description",
  sold_qty: 10,
  category: "Mock Category",
  categories: ["Category1", "Category2"],
};

describe("ProductDetail", () => {
  it("should render product details correctly", () => {
    render(<ProductDetail item={mockItem} />);
    const itemTitleElement = screen.getByText(mockItem.title);
    const formattedPrice = formatPrice(mockItem.price);
    const itemPriceElement = screen.queryAllByText(formattedPrice);
    const itemConditionElement = screen.getByText(/novo/i);
    const itemDescriptionElement = screen.getByText(mockItem.description);
    expect(itemTitleElement).not.toBeNull();
    expect(itemPriceElement).not.toBeNull();
    expect(itemConditionElement).not.toBeNull();
    expect(itemDescriptionElement).not.toBeNull();
  });
  it("should handle image correctly", () => {
    render(<ProductDetail item={mockItem} />);
    const imageElement = screen.getByAltText(
      mockItem.title
    ) as HTMLImageElement;
    expect(imageElement).not.toBeNull();
  });
  it("should translate condition correctly", () => {
    const usedItem = { ...mockItem, condition: "used" };
    render(<ProductDetail item={usedItem} />);
    const itemConditionElement = screen.getByText(/usado/i);
    expect(itemConditionElement).not.toBeNull();
  });
  it("should render 'Comprar' button", () => {
    render(<ProductDetail item={mockItem} />);
    const buttonElement = screen.getByText(/comprar/i);
    expect(buttonElement).not.toBeNull();
  });
});
