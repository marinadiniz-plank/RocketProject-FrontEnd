/* eslint-disable prettier/prettier */
/// <reference types="cypress"/>
describe("Rocket page", () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('should navigate into the rocket page and add a new rocket', () => {
        cy.get('#navbar_btn').click();
        cy.get('a[href="/Rocket"]').click();
        cy.url().should('include', '/Rocket');

        cy.get('.add_btn').should('exist').click();

        cy.get('.modal').should('exist');
        cy.get('.form').should('exist');


        cy.get('input[id="name"]').type('Falcon 9');
        cy.get('.btn').click();

        cy.get('.close').should('exist').click();

        cy.get('.divTable').should('exist');

        cy.get('.divTable').should('contain', 'Falcon 9')
    });

    it('should navigate into the rocket page and update an existing rocket', () => {
        cy.get('#navbar_btn').click();
        cy.get('a[href="/Rocket"]').click();
        cy.url().should('include', '/Rocket');

        cy.get('.divTable').should('exist');

        cy.contains("td", 'Falcon 9')
            .parent("tr")
            .within(() => {
                cy.get(".edit_btn").click();
            });

        cy.get('input[id="name"]').clear().type('Falcon');


        cy.get('.btn').click()

        cy.get('.divTable')
            .contains('tr', 'Falcon')
            .invoke('attr', 'data-id')
            .then((newRocketId) => {
                cy.log('New Rocket ID:', newRocketId)
            })

        cy.get('.close').should('exist').click();

        cy.get('.divTable').should('exist');

        cy.get('.divTable').should('contain', 'Falcon')
    });

    it('should navigate into the rocket page and delete an existing rocket', () => {
        cy.get('#navbar_btn').click();
        cy.get('a[href="/Rocket"]').click();
        cy.url().should('include', '/Rocket');

        cy.get('.divTable').should('exist');

        cy.contains("td", 'Falcon')
            .parent("tr")
            .within(() => {
                cy.get(".del_btn").click();
            });

        cy.get(".divTable").should("not.contain", 'Falcon');


    });
});