import React from "react";
import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search";

const useRouterMock = {
  push: vi.fn(),
};

vi.mock("next/navigation", () => ({
  useRouter: () => useRouterMock,
}));

describe("Search", () => {
  it("should call onSearch with correct search term", () => {
    const mockOnSearch = vi.fn();
    render(<Search onSearch={mockOnSearch} />);

    const searchInput = screen.getByTestId("search-input");

    fireEvent.change(searchInput, { target: { value: "iphone" } });
    fireEvent.submit(searchInput);

    expect(mockOnSearch).toHaveBeenCalledWith("iphone");

    expect(useRouterMock.push).toHaveBeenCalled();
    expect(useRouterMock.push.mock.calls[0][0]).toBe("/items?search=iphone");
  });
});
