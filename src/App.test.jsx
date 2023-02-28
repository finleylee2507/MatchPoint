import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Home Page Tests", () => {
  test("Promotional message text should display", () => {
    render(<App />);
    expect(screen.getByText("Sporting events that pique their interests!"));
  });

  test("MATCHPOINT text should display", () => {
    render(<App />);
    expect(screen.getByText("MATCHPOINT"));
  });
});
