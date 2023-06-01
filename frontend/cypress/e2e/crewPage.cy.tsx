/* eslint-disable prettier/prettier */
/// <reference types="cypress"/>
describe("Crew page", () => {
    beforeEach(() => {
        cy.visit("/");
    });
    it("should navigate into the crew page and add a new crew", () => {
        cy.get("#navbar_btn").click();
        cy.get('a[href="/Crew"]').click();
        cy.url().should("include", "/Crew");

        cy.get(".add_btn").should("exist").click();

        cy.get(".modal").should("exist");
        cy.get(".form").should("exist");

        cy.get('input[id="name"]').type("Crew test");
        cy.get('input[id="crewman"]').type("1, 2");
        cy.get(".btn").click();

        cy.get(".close").should("exist").click();

        cy.get(".divTable").should("exist");

        cy.get(".divTable td").should("contain", "Crew test");
    });

    it("should navigate into the crew page and update a new crew", () => {
        cy.get("#navbar_btn").click();
        cy.get('a[href="/Crew"]').click();
        cy.url().should("include", "/Crew");

        cy.get('.divTable').should('exist');

        cy.contains("td", "Crew test")
            .parent("tr")
            .within(() => {
                cy.get(".edit_btn").click();
            });

        cy.get('input[id="crewman"]').clear().type("1");

        cy.get(".btn").click();

        cy.get(".close").should("exist").click();

        cy.get(".divTable").should("exist");

        cy.get(".divTable td").should("contain", "Crew test");
    });

    it('should navigate into the crew page and delete an existing crew', () => {
        cy.get('#navbar_btn').click();
        cy.get('a[href="/Crew"]').click();
        cy.url().should('include', '/Crew');

        cy.get('.divTable').should('exist');

        cy.contains("td", "Crew test")
            .parent("tr")
            .within(() => {
                cy.get(".del_btn").click();
            });

        cy.get(".divTable").should("not.contain", "Crew test");


    });
});
