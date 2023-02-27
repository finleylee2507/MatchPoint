describe("Tests to make sure after clicking the delete button a modal will pop up to confirm the action", () => {
    it("verifies that a modal pops up after clicking the delete event button", () => {
      cy.visit("/");
      cy.get("[data-cy=add-event-icon]").click();
      cy.get("[data-cy=create-event-button").click();
      cy.get('input[name="eventName"]').type("cypress test delete event");
      cy.get('input[name="eventLocation"]').type("cypress test location");
      cy.get('input[name="eventCapacity"]').type("10");
      cy.get('input[name="dateString"]').type("2023-03-23");
      cy.get('input[name="timeString"]').type("12:30");
      cy.get('input[name="eventDuration"]').type("2");
      cy.get('select[name="skillLevel"]').select("Beginner");
      cy.get("[data-cy=create-event-button").click();
      cy.get("[data-cy=modal-confirm-button").click();
      cy.get("[data-cy=delete-event-button]").eq(0).click();
      cy.get("[data-cy=delete-event-modal]").should("be.visible");
    });
  });