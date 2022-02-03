describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/").get(".container").injectAxe();
  });
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y();
  });
});
