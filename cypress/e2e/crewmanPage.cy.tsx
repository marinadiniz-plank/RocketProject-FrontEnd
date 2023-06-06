/* eslint-disable prettier/prettier */
import { v4 as uuidv4 } from 'uuid';
import '../support/e2e';

const createdCrewman = {
    name: uuidv4(),
    patent: "Captain"
};

const updatedCrewman = {
    name: createdCrewman.name,
    patent: "Crewman"
};

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


        cy.get('input[id="name"]').type(createdCrewman.name);
        cy.get('input[id="patent"]').type(createdCrewman.patent);

        cy.get('.btn').click();

        cy.get('.close').should('exist').click();

        cy.get('.divTable').should('exist');

        cy.get('.divTable').should('contain', createdCrewman.name)
    });

    it('should navigate into the crewman page and update an existing crewman', () => {
        cy.get('#navbar_btn').click();
        cy.get('a[href="/Crewman"]').click();
        cy.url().should('include', '/Crewman');

        cy.get('.divTable').should('exist');

        cy.contains("td", updatedCrewman.name)
            .parent("tr")
            .within(() => {
                cy.get(".edit_btn").click();
            });

        cy.get('input[id="name"]').clear().type(updatedCrewman.name);


        cy.get('.btn').click()

        cy.get('.divTable')
            .contains('tr', updatedCrewman.name)
            .invoke('attr', 'data-id')
            .then((newCrewmanId) => {
                cy.log('New Crewman ID:', newCrewmanId)
            })

        cy.get('.close').should('exist').click();

        cy.get('.divTable').should('exist');

        cy.get('.divTable').should('contain', updatedCrewman.name)
    });

    it('should navigate into the crewman page and delete an existing crewman', () => {
        cy.get('#navbar_btn').click();
        cy.get('a[href="/Crewman"]').click();
        cy.url().should('include', '/Crewman');

        cy.get('.divTable').should('exist');

        cy.contains("td", updatedCrewman.name)
            .parent("tr")
            .within(() => {
                cy.get(".del_btn").click();
            });

        cy.get(".divTable").should("not.contain", updatedCrewman.name);


    });
});