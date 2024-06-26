import React from "react";
import { render, screen } from "@testing-library/react";
import { expect, vi } from "vitest";
import Header from "./Header";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    pathname: "/",
    push: vi.fn(),
  }),
}));

const mockOnSearch = vi.fn();

describe("Header", () => {
  it("renders logo and search component", () => {
    render(<Header onSearch={mockOnSearch} />);

    const logoElement = screen.getByRole("img", {
      name: "Logotipo Mercado Livre",
    });
    expect(logoElement).not.toBeNull();
  });

  it("renders Search component", () => {
    render(<Header onSearch={mockOnSearch} />);

    const searchElement = screen.getByTestId("search-input");
    expect(searchElement).not.toBeNull();
  });
});
