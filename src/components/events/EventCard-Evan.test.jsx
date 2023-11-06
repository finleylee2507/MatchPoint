import {describe, it, vi} from "vitest";
import {fireEvent, render, waitFor} from "@testing-library/react";
import EventList from "./EventList.jsx";
import {screen} from "@testing-library/dom";

vi.mock("./utilities/userProfile");
const mockEventData = {
    eventId1: {
        id: "eventId1",
        title: "Event 1",
        date: "2022-01-01",
        participants: ["userId2"],
        imgSrc: "https://example.com/event1.jpg",
        owner: "userId2",
    },
};

const mockUser = {
    displayName: "mainUser",
    email: "mainUser@gmail.com",
    uid: "userId1",
    photoURL: "abcdefg.com",
};

const mockUser2 = {
    displayName: "mainUser2",
    email: "mainUser2@gmail.com",
    uid: "userId2",
    photoURL: "abcdefgh.com",
};

const mockAllUsers = {
    userId1: {
        displayName: "user1",
        email: "user1@gmail.com",
        photoURL: "abcdefg.com",
        unreadMessages: ["welcome"],
    },
    userId2: {
        displayName: "user2",
        email: "user2@gmail.com",
        photoURL: "abcdefgh.com",
        unreadMessages: ["welcome"],
    },
};

describe("Clicking See Event Details on the Event Card", () => {
    it("Opens the modal containing event details", async () => {
        const {getByTestId, queryByTestId} = render(
            <EventList
                eventData={mockEventData}
                user={mockUser}
                allUsers={mockAllUsers}
            />
        );

        const joinEventButton = getByTestId("join-event");

        fireEvent.click(joinEventButton);
        // check that the user can leave the event now

        // Wait for the modal to be visible within a 5 second timeout period
        await waitFor(
            () => {
                expect(screen.findByText("Successfully joined event!"));
            },
            {timeout: 5000}
        );
    });
});
