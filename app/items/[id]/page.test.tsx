import React from "react";
import { render, screen } from "@testing-library/react";
import { vi, it, expect, describe } from "vitest";
import "@testing-library/jest-dom";
import ItemDetail from "./page";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
  useParams: () => ({ id: "1" }),
}));

vi.mock("../../../hooks/useFetch", () => ({
  useFetch: () => ({
    data: {
      item: {
        id: "1",
        title: "Mock Item",
        categories: ["Category 1", "Category 2"],
      },
    },
    loading: false,
    error: null,
  }),
}));

describe("ItemDetail component", () => {
  it("renders header and product detail correctly", async () => {
    render(<ItemDetail />);

    const loadingElement = screen.queryByText("Loading...");
    expect(loadingElement).toBeNull();

    const errorElement = screen.queryByText("Error");
    expect(errorElement).toBeNull();

    const headerElement = screen.getByTestId("header");
    expect(headerElement).toBeInTheDocument();

    const breadcrumbElement = screen.queryAllByText("Category 1 > Category 2");
    expect(breadcrumbElement).not.toBeNull();

    const productTitleElement = screen.getByText("Mock Item");
    expect(productTitleElement).toBeInTheDocument();
  });
});
