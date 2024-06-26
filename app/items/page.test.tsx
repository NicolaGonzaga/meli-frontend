import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { vi, it, expect, describe } from "vitest";
import "@testing-library/jest-dom";
import ItemsPage from "./page";

vi.mock("next/navigation", () => ({
  useSearchParams: () => ({ get: vi.fn().mockReturnValue("") }),
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

vi.mock("../../hooks/useFetch", () => ({
  useFetch: vi.fn().mockReturnValue({
    data: { items: [], categories: [] },
    loading: true,
    error: null,
  }),
}));

describe("ItemsPage component", () => {
  it("renders loading state correctly", async () => {
    render(<ItemsPage />);

    const loadingElement = screen.getByText("Carregando...");
    expect(loadingElement).toBeInTheDocument();

    const errorElement = screen.queryByText("Erro ao carregar dados");
    expect(errorElement).toBeNull();

    const searchElement = screen.queryByTestId("search-input");
    expect(searchElement).toBeNull();

    const breadcrumbElement = screen.queryByTestId("breadcrumb");
    expect(breadcrumbElement).toBeNull();
    ("search-input");

    const listElement = screen.queryByTestId("list");
    expect(listElement).toBeNull();
  });
});
