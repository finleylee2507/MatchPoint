/* globals cy */

// Test for launch
describe("Test App", () => {
  it("launches", () => {
    cy.visit("/");
  });
});

// Test for content
describe("Test App", () => {
  it("launches", () => {
    cy.visit("/");
  });

  it("contains MatchPoint app name", () => {
    cy.visit("/");
    cy.get("[data-cy=app-name]").should("contain", "MatchPoint");
  });
});

// Test for interaction
describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it("contains MatchPoint app name", () => {
    cy.visit("/");
    cy.get("[data-cy=app-name]").should("contain", "MatchPoint");
  });

  it('shows no events to display', () => {
    cy.visit ('/');
    cy.get('[data-cy=Winter]').click();
    cy.get('[data-cy=course]').should('contain' ,'Winter');
  });
});