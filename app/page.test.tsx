import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi, it, expect, describe } from "vitest";
import "@testing-library/jest-dom";
import Home from "./page";

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

describe("Home component", () => {
  it("renders header and handles search correctly", async () => {
    render(<Home />);

    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();

    const searchInput = screen.getByPlaceholderText("Buscar produtos");
    fireEvent.change(searchInput, { target: { value: "apple" } });
  });
});
