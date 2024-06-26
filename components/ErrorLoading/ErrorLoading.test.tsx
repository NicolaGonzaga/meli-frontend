import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Error from "./ErrorLoading";

describe("Error", () => {
  it("should render the error message", () => {
    const errorMessage = "This is an error message";

    render(<Error message={errorMessage} />);

    expect(screen.getByText(`Erro: ${errorMessage}`)).toBeInTheDocument();
  });
});
