import { describe, expect, it, vi } from "vitest";
import {
  fireEvent,
  getByTestId,
  getByText,
  render,
  waitFor,
} from "@testing-library/react";
import EventList from "./EventList.jsx";
import { useProfile } from "../../utilities/userProfile";

vi.mock("./utilities/userProfile");
const mockEventData = {
  eventId1: {
    id: "eventId1",
    title: "Event 1",
    date: "2022-01-01",
    participants: ["userId1"],
    imgSrc: "https://example.com/event1.jpg",
    owner: "userId1",
  },
};

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

describe("Clicking See Event Details on the Event Card", () => {
  it("Opens the modal containing event details", async () => {
    const { getByTestId, queryByTestId } = render(
      <EventList
        eventData={mockEventData}
        user={mockUser}
        allUsers={mockAllUsers}
      />
    );

    // Wait for the events state variable to become non-empty
    // await waitFor(() => {
    //   expect(getByTestId("event-list")).to.exist;
    // });

    const seeEventDetailsButton = getByTestId("see-event-details");

    const isVisibleBeforeClick = queryByTestId("event-modal");

    // // modal should not be present initially

    expect(isVisibleBeforeClick).toBeFalsy();

    // click the delete event button

    fireEvent.click(seeEventDetailsButton);

    // wait for the modal to be visible within a 5 second timeout period

    await waitFor(
      () => {
        const isVisibleAfterClick = queryByTestId("event-modal");

        return isVisibleAfterClick !== null;
      },
      { timeout: 5000 }
    );
  });
});
