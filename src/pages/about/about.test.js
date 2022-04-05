import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./About";

it("when render the abuout page should contain title", () => {
  render(<About />);
  const text = screen.getByText("CRM");
  expect(text).toBeInTheDocument();
});