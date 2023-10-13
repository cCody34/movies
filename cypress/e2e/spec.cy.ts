describe("Test1", () => {
  beforeEach(() => {
    cy.visit("localhost:5173/");
  });
  it("has a header that says header", () => {
    cy.contains("Header");
  });
  describe("Search TV shows", () => {
    it("has a searchTVShows link", () => {
      cy.get('[data-testid="search-shows-link"]');
    });
    it("redirects to /shows", () => {
      cy.get('[data-testid="search-shows-link"]').click();
      cy.url().should("eq", "http://localhost:5173/shows");
    });
    it("has an input box", () => {
      cy.get('[data-testid="search-shows-link"]').click();
      cy.get('[data-testid="search-shows-input"]').type("Greys");
      cy.get('[data-testid="search-shows-button"]').click();
    });
  });
});
