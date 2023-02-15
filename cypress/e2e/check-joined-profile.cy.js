// joins and leaves the event to keep database the same
describe("Tests to make sure that joined events appear in the profile section", () => {
    it("verifies that clicking join event and navigating to the profile shows the user the event details", () => {
      cy.visit("/");
      cy.viewport(1280,800);
      cy.get(".event-card-button")
        .eq(0)
        .click();
      cy.get(".nav-link-profile").click();
      // click past events
      cy.get(".nav-item").eq(1).click();
      // verify that the event is there
      cy.get(".user-card").eq(1).get(".card-header").get(".user-event-card-title").should(
        "contain",
        "3v3 Basketball Game"
      );
      // leave the event
      cy.get(".user-card").eq(1).get(".card-footer").get(".event-card-button").eq(4).click();
    });
  });