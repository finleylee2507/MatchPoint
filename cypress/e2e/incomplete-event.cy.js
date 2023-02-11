// Tests to make sure error message shows up if a required
// field is not filled up on the add event form

describe("Tests to make sure error message shows up if a required field is not filled up on the add event form.", () => {
  it("launches, clicks the add event button, doesn't fill in all the fields, and ", () => {
    cy.visit("/");
    cy.get("[data-cy=add-event-icon]").click();
    cy.get("[data-cy=create-event-button").click();
    cy.get("[data-cy=no-event-name-feedback").should(
      "contain",
      "Please provide an event name."
    );
  });
});
