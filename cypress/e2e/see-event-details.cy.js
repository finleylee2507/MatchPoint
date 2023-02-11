// Tests to make sure that upon clicking on
// an event, we can see the event description

describe("Tests to make sure that upon clicking on an event, we can see the event description", () => {
  it("launches, clicks on the See Event Details button for the 3v3 Basketball Game event, and makes sure the description is there", () => {
    cy.visit("/");
    cy.get("[data-cy=see-event-details]").eq(0).click();
    cy.get("[data-cy=event-details-description]")
      .eq(0)
      .should(
        "contain",
        "Get ready to hit the court and show off your skills! Join us for an exciting 3 on 3 basketball game where teamwork, agility, and determination will be key to victory. With fast-paced action and plenty of opportunities for showcasing your abilities, this promises to be a thrilling experience for all participants. Don't miss out on this chance to play with friends, make new ones, and have a blast on the court. Sign up now and let the games begin!"
      );
  });
});
