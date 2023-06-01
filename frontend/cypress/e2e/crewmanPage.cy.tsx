/* eslint-disable prettier/prettier */
/// <reference types="cypress"/>
describe("Crewman page", () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('should navigate into the crewman page and add a new crewman', () => {
        cy.get('#navbar_btn').click();
        cy.get('a[href="/Crewman"]').click();
        cy.url().should('include', '/Crewman');

        cy.get('.add_btn').should('exist').click();

        cy.get('.modal').should('exist');
        cy.get('.form').should('exist');


        cy.get('input[id="name"]').type('Fulano');
        cy.get('input[id="patent"]').type('Cooker');

        cy.get('.btn').click();

        cy.get('.close').should('exist').click();

        cy.get('.divTable').should('exist');

        cy.get('.divTable').should('contain', 'Fulano')
    });

    it('should navigate into the crewman page and update an existing crewman', () => {
        cy.get('#navbar_btn').click();
        cy.get('a[href="/Crewman"]').click();
        cy.url().should('include', '/Crewman');

        cy.get('.divTable').should('exist');

        cy.contains("td", 'Fulano')
            .parent("tr")
            .within(() => {
                cy.get(".edit_btn").click();
            });

        cy.get('input[id="name"]').clear().type('Ciclano');


        cy.get('.btn').click()

        cy.get('.divTable')
            .contains('tr', 'Ciclano')
            .invoke('attr', 'data-id')
            .then((newCrewmanId) => {
                cy.log('New Crewman ID:', newCrewmanId)
            })

        cy.get('.close').should('exist').click();

        cy.get('.divTable').should('exist');

        cy.get('.divTable').should('contain', 'Ciclano')
    });

    it('should navigate into the crewman page and delete an existing crewman', () => {
        cy.get('#navbar_btn').click();
        cy.get('a[href="/Crewman"]').click();
        cy.url().should('include', '/Crewman');

        cy.get('.divTable').should('exist');

        cy.contains("td", 'Ciclano')
            .parent("tr")
            .within(() => {
                cy.get(".del_btn").click();
            });

        cy.get(".divTable").should("not.contain", 'Ciclano');


    });
});