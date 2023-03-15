import { describe, vi, it } from "vitest";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import MessageList from "./MessageList.jsx";

vi.mock("./utilities/userProfile");

const mockUser = {
  displayName: "mainUser",
  email: "mainUser@gmail.com",
  uid: "userId1",
  photoURL: "abcdefg.com",
  unreadMessages: ["welcome"],
};

const mockAllUsers = {
  userId1: {
    displayName: "user1",
    email: "user1@gmail.com",
    photoURL: "abcdefg.com",
    unreadMessages: ["welcome"],
  },
};

describe("Checking the empty message box", () => {
  it("Opens up message list", async () => {
    const { getByTestId } = render(
      <MessageList user={mockUser} allUsers={mockAllUsers} />
    );

    screen.getByText("Loading messages ...");
  });
});
