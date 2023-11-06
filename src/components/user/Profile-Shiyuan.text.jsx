import {describe, expect, vi} from "vitest";
import {getByTestId, render, screen,} from "@testing-library/react";
import Profile from "./Profile";

vi.mock("./utilities/userProfile");

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
describe("This tests if user is not defined, profile should not be loaded", () => {
    const {getByTestId, queryByTestId} = render(
        <Profile
            allUsers={null}
            user={null}
            allEvents={mockProfileEventsData}
        />
    );

    expect(
        screen.getByText(
            "Unable to load profile. Please try again later"
        )
    );
});
