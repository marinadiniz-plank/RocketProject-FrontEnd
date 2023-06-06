/* eslint-disable prettier/prettier */
/// <reference types="cypress"/>
describe("Navbar", () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should toggle the sidebar when clicking the navbar button', () => {
        cy.get('#navbar_btn').click();
        cy.get('.sidebar').should('have.css', 'width', '230px');

        cy.get('#navbar_btn').click();
        cy.get('.sidebar').should('have.css', 'width', '75px');
    });

    it('should navigate to the rocket page when clicking in the rocket', () => {
        cy.get('#navbar_btn').click();
        cy.get('a[href="/Rocket"]').click();
        cy.url().should('include', '/Rocket');
    });

    it('should navigate to the crew page when clicking in the crew', () => {
        cy.get('#navbar_btn').click();
        cy.get('a[href="/Crew"]').click();
        cy.url().should('include', '/Crew');
    });

    it('should navigate to the crewman page when clicking in the crewman', () => {
        cy.get('#navbar_btn').click();
        cy.get('a[href="/Crewman"]').click();
        cy.url().should('include', '/Crewman');
    });

    it('should navigate to the launch page when clicking in the Launch', () => {
        cy.get('#navbar_btn').click();
        cy.get('a[href="/Launch"]').click();
        cy.url().should('include', '/Launch');
    });
});

