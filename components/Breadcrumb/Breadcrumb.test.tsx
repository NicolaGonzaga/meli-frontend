import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Breadcrumb from "./Breadcrumb";

describe("Breadcrumb", () => {
  it("should render breadcrumb categories", () => {
    const categories = ["Home", "Products", "Electronics"];

    render(<Breadcrumb categories={categories} />);

    categories.forEach((category) => {
      expect(screen.getByText(new RegExp(category, "i"))).toBeInTheDocument();
    });
  });
});
