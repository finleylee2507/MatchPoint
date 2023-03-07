import { beforeEach, describe, expect, test, vi, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { useAuthState, useDbData } from "./firebase";
import {useProfile} from './utilities/userProfile'

import App from "./App";

vi.mock('./utilities/userProfile')
// vi.mock('./utilities/firebase.js')
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

// Test without authentication
describe("without authentication", () => {
  beforeEach(()=>{
    useProfile.mockReturnValue(null)
  })

  it("shows the login page", async () => {
    render(<App />);
  });
})


describe("after authentication", () => {
  beforeEach(()=>{
    useAuthState.mockReturnValue(null)
  })

  it("shows the login page", async () => {
    render(<App />);
  });
})