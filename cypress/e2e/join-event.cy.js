describe("Tests to make sure message will show up after a user click join event", () => {
  it("verifies that message length + 1 after joining the event", () => {
    cy.visit("/");
    cy.get("[data-cy=join-event-icon]").eq(0).click();
    cy.visit("/inbox");
    cy.get(".message").then(($messageItemsAfter) => {
      const messageItemsLengthAfter = $messageItemsAfter.length;
      expect(messageItemsLengthAfter).to.equal(messageItemsLengthBefore + 1);
    });
  });
});

describe("Tests to make sure searching function is working and join the event at the same time", () => {
  it("search event, and join event, then check the inbox message", () => {
    cy.visit("/");
    cy.get('input[type="search"]').type("soccor");
    cy.get("[data-cy=activity-search-bar-search-icon]").click();
    cy.get("[data-cy=join-event-icon]").eq(0).click();
    cy.visit("/inbox");
    cy.get(".message").then(($messageItemsAfter) => {
      const messageItemsLengthAfter = $messageItemsAfter.length;
      expect(messageItemsLengthAfter).to.equal(messageItemsLengthBefore + 1);
    });
  });
});
