describe("Tests to make sure deleting an event will increase the inbox message count by 1", () => {
  it("launches, creates an event, clicks the delete event button, and ", () => {
    cy.visit("/inbox");
    cy.get(".message").then(($messageItemsBefore) => {
      const messageItemsLengthBefore = $messageItemsBefore.length;
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
      cy.get("[data-cy=modal-confirm-button").click();
      cy.get("[data-cy=delete-event-button]").eq(0).click();
      cy.visit("/inbox");
      cy.get(".message").then(($messageItemsAfter) => {
        const messageItemsLengthAfter = $messageItemsAfter.length;
        expect(messageItemsLengthAfter).to.equal(messageItemsLengthBefore + 1);
      });
    });
  });
});
