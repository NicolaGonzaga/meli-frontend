import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { vi, it, expect, describe } from "vitest";
import Button from "./Button";

describe("Button component", () => {
  it("should render the label correctly", () => {
    const { getByText } = render(<Button label="Comprar" />);
    expect(getByText("Comprar")).not.toBeNull();
  });

  it("should call the onClick handler when clicked", () => {
    const mockOnClick = vi.fn();
    const { getByText } = render(
      <Button label="Comprar" onClick={mockOnClick} />
    );

    const button = getByText("Comprar");
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
