// Tests to make sure Delete and Edit button is available when event is created
  
  describe("Tests to make sure Delete and Edit button is available when event is created", () => {
    it("launches, clicks the add event button, creates an event, and ", () => {
      cy.visit("/");
      cy.get("[data-cy=add-event-icon]").click();
      cy.get("[data-cy=create-event-button").click();
      cy.get('input[name="eventName"]').type("cypress test event");
      cy.get('input[name="eventLocation"]').type("cypress test location");
      cy.get('input[name="eventCapacity"]').type("10");
      cy.get('input[name="dateString"]').type("2023-03-23");
      cy.get('input[name="timeString"]').type("12:30");
      cy.get('input[name="eventDuration"]').type("2");
      cy.get('select[name="skillLevel"]').select("Beginner");
      cy.get("[data-cy=create-event-button").click();
      cy.get("[data-cy=delete-event-button]").should("be.visible");
    });
  });
  