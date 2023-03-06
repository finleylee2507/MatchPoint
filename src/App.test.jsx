import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Home Page Tests", () => {
  test("Promotional message text should display", () => {
    render(<App />);
    expect(
      screen.getByText(
        "We help NU students create or join sporting events that pique their interests!"
      )
    );
  });

  test("MATCHPOINT text should display", () => {
    render(<App />);
    expect(screen.getByText("MatchPoint"));
  });

  // test that fails with no authenticated user
  test("Inbox tab should display with user", () => {
    render(<App />);
    expect(screen.getByText("Inbox"));
  });
});
