/// <reference types="cypress" />

describe("Test1", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  it("has a header that says header", () => {
    cy.contains("Header");
  });
});
