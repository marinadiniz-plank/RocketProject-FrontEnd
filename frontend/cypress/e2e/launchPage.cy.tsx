/* eslint-disable prettier/prettier */
/// <reference types="cypress"/>
describe("Launch page", () => {
    beforeEach(() => {
        cy.visit("/");
    });
    it("should navigate into the launch page and add a new launch", () => {
        cy.get("#navbar_btn").click();
        cy.get('a[href="/Launch"]').click();
        cy.url().should("include", "/Launch");

        cy.get(".add_btn").should("exist").click();

        cy.get(".modal").should("exist");
        cy.get(".form").should("exist");

        cy.get('input[id="launchCode"]').type("123");
        cy.get('input[id="date"]').type("2023-06-01");
        cy.get('input[id="success"]').type("true");
        cy.get('input[id="rocket"]').type("3");
        cy.get('input[id="crew"]').type("3");
        cy.get(".btn").click();

        cy.get(".close").should("exist").click();

        cy.get(".divTable").should("exist");

        cy.get(".divTable td").should("contain", "123");
    });

    it("should navigate into the launch page and update a new launch", () => {
        cy.get("#navbar_btn").click();
        cy.get('a[href="/Launch"]').click();
        cy.url().should("include", "/Launch");

        cy.get('.divTable').should('exist');

        cy.contains("td", "123")
            .parent("tr")
            .within(() => {
                cy.get(".edit_btn").click();
            });

        cy.get('input[id="success"]').clear().type("false");

        cy.get(".btn").click();

        cy.get(".close").should("exist").click();

        cy.get(".divTable").should("exist");

        cy.get(".divTable td").should("contain", "123");
    });

    it('should navigate into the launch page and delete an existing launch', () => {
        cy.get('#navbar_btn').click();
        cy.get('a[href="/Launch"]').click();
        cy.url().should('include', '/Launch');

        cy.get('.divTable').should('exist');

        cy.contains("td", "123")
            .parent("tr")
            .within(() => {
                cy.get(".del_btn").click();
            });

        cy.get(".divTable").should("not.contain", "123");


    });
});
