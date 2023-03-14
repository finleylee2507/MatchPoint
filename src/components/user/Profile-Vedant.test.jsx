import { describe, expect, it, vi } from "vitest";
import {
  fireEvent,
  getByTestId,
  getByText,
  render,
  waitFor,
  screen,
} from "@testing-library/react";
import Profile from "./Profile";
import { useProfile } from "../../utilities/userProfile";
import { Nav } from "react-bootstrap";

vi.mock("./utilities/userProfile");

const mockProfileEventsData = [];

const mockUser = {
  displayName: "mainUser",
  email: "mainUser@gmail.com",
  uid: "userId1",
  photoURL: "abcdefg.com",
};

const mockAllUsers = {
  userId1: {
    displayName: "user1",
    email: "user1@gmail.com",
    photoURL: "abcdefg.com",
    unreadMessages: ["welcome"],
  },
};

describe("Displays no upcoming or past events for the current user", () => {
  it("Sees text indicating no upcoming events for the user, then clicks past tab and sees text indicating no past events for the user", async () => {
    const { getByTestId, queryByTestId } = render(
      <Profile
        allUsers={mockAllUsers}
        user={mockUser}
        allEvents={mockProfileEventsData}
      />
    );

    expect(
      screen.getByText(
        "You don't have any upcoming events. Please create one, or join one from the All Events tab!"
      )
    );

    const pastEventsTab = screen.getByText("Past").closest("button");
    fireEvent.click(pastEventsTab);

    expect(screen.getByText("You don't have any past events."));
  });
});

// SOURCE: Roman Mkrtchian's answer from the Stack Overflow link below
// https://stackoverflow.com/questions/65923471/how-to-write-test-cases-for-tabs-in-material-ui-using-react-testing-library
