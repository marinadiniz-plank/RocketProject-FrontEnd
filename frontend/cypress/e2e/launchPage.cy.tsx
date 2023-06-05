/* eslint-disable prettier/prettier */
import { v4 as uuidv4 } from 'uuid';
import '../support/e2e';

const createdLaunch = {
    launchCode: uuidv4(),
    date: "2023-06-02",
    success: "true",
    rocketId: "3",
    crewId: "3"
};

const updatedLaunch = {
    launchCode: uuidv4(),
    date: "2023-06-01",
    success: "false",
    rocketId: "4",
    crewId: "4"
};

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

        cy.get('input[id="launchCode"]').type(createdLaunch.launchCode);
        cy.get('input[id="date"]').type(createdLaunch.date);
        cy.get('input[id="success"]').type(createdLaunch.success);
        cy.get('input[id="rocket"]').type(createdLaunch.rocketId);
        cy.get('input[id="crew"]').type(createdLaunch.crewId);
        cy.get(".btn").click();

        cy.get(".close").should("exist").click();

        cy.get(".divTable").should("exist");

        cy.get(".divTable td").should("contain", createdLaunch.launchCode);
    });

    it("should navigate into the launch page and update a new launch", () => {
        cy.get("#navbar_btn").click();
        cy.get('a[href="/Launch"]').click();
        cy.url().should("include", "/Launch");

        cy.get('.divTable').should('exist');

        cy.contains("td", createdLaunch.launchCode)
            .parent("tr")
            .within(() => {
                cy.get(".edit_btn").click();
            });

        cy.get('input[id="success"]').clear().type(updatedLaunch.success);

        cy.get(".btn").click();

        cy.get(".close").should("exist").click();

        cy.get(".divTable").should("exist");

        cy.get(".divTable td").should("contain", createdLaunch.launchCode);
    });

    it('should navigate into the launch page and delete an existing launch', () => {
        cy.get('#navbar_btn').click();
        cy.get('a[href="/Launch"]').click();
        cy.url().should('include', '/Launch');

        cy.get('.divTable').should('exist');

        cy.contains("td", createdLaunch.launchCode)
            .parent("tr")
            .within(() => {
                cy.get(".del_btn").click();
            });

        cy.get(".divTable").should("not.contain", createdLaunch.launchCode);


    });
});
