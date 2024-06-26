import React from "react";
import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Loading", () => {
  it("should render loading text", () => {
    render(<Loading />);

    const loadingElement = screen.getByText(/Carregando.../i);

    expect(loadingElement).not.toBeNull();
  });
});
