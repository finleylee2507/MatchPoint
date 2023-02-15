describe("Tests to make sure that the inbox tab exists and contains the Welcome Message", () => {
    it("verifies that clicking the inbox tab will go to inbox and contain Welcome message", () => {
      cy.visit("/");
      cy.viewport(1280,800);
      cy.get(".nav-link-inbox").click();
      cy.get(".message-card-title")
        .eq(0)
        .should(
        "contain",
        "Welcome to MatchPoint");
    });
  });