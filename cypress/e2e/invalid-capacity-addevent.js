// Tests to make sure error message shows up if event capacity is more than 100

describe("Tests to make sure error message shows up if event capacity is more than 100.", () => {
    it("launches, clicks the add event button, fills in all the fields correctly, except puts capacity as 111, and ", () => {
      cy.visit("/");
      cy.get("[data-cy=add-event-icon]").click();
      cy.get('input[name="eventName"]').type("cypress test event");
      cy.get('input[name="eventLocation"]').type("cypress test location");
      cy.get('input[name="eventCapacity"]').type("111");
      cy.get('input[name="dateString"]').type("2023-03-23");
      cy.get('input[name="timeString"]').type("12:30");
      cy.get('input[name="eventDuration"]').type("2");
      cy.get('select[name="skillLevel"]').select("Beginner");
      cy.get("[data-cy=create-event-button").click();
      cy.get("[data-cy=no-event-name-feedback").should(
        "contain",
        "Please provide a valid number of attendees."
      );
    });
  });
  