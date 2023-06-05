/* eslint-disable prettier/prettier */
import { v4 as uuidv4 } from 'uuid';
import '../support/e2e';

const createdRocket = {
    name: uuidv4()
};

const updatedRocket = {
    name: uuidv4()
};

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


        cy.get('input[id="name"]').type(createdRocket.name);
        cy.get('.btn').click();

        cy.get('.close').should('exist').click();

        cy.get('.divTable').should('exist');

        cy.get('.divTable').should('contain', createdRocket.name)
    });

    it('should navigate into the rocket page and update an existing rocket', () => {
        cy.get('#navbar_btn').click();
        cy.get('a[href="/Rocket"]').click();
        cy.url().should('include', '/Rocket');

        cy.get('.divTable').should('exist');

        cy.contains("td", createdRocket.name)
            .parent("tr")
            .within(() => {
                cy.get(".edit_btn").click();
            });

        cy.get('input[id="name"]').clear().type(updatedRocket.name);


        cy.get('.btn').click()

        cy.get('.divTable')
            .contains('tr', updatedRocket.name)
            .invoke('attr', 'data-id')
            .then((newRocketId) => {
                cy.log('New Rocket ID:', newRocketId)
            })

        cy.get('.close').should('exist').click();

        cy.get('.divTable').should('exist');

        cy.get('.divTable').should('contain', updatedRocket.name)
    });

    it('should navigate into the rocket page and delete an existing rocket', () => {
        cy.get('#navbar_btn').click();
        cy.get('a[href="/Rocket"]').click();
        cy.url().should('include', '/Rocket');

        cy.get('.divTable').should('exist');

        cy.contains("td", updatedRocket.name)
            .parent("tr")
            .within(() => {
                cy.get(".del_btn").click();
            });

        cy.get(".divTable").should("not.contain", updatedRocket.name);


    });
});