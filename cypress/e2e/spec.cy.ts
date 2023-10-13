describe("Test1", () => {
  beforeEach(() => {
    cy.visit("localhost:5173/");
  });
  it("has a header that says header", () => {
    cy.contains("Header");
  });
});
