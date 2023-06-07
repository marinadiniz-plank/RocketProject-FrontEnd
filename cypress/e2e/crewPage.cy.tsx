import { v4 as uuidv4 } from "uuid";
import "../support/e2e";

const createdCrew = {
	name: uuidv4(),
	crewmans: "2, 3, 4",
};

const updatedCrew = {
	name: createdCrew.name,
	crewmans: "2, 4",
};

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

		cy.get('input[id="name"]').type(createdCrew.name);
		cy.get('input[id="crewman"]').type(createdCrew.crewmans);
		cy.get(".btn").click();

		cy.get(".close").should("exist").click();

		cy.get(".divTable").should("exist");

		cy.get(".divTable td").should("contain", createdCrew.name);
	});

	it("should navigate into the crew page and update a new crew", () => {
		cy.get("#navbar_btn").click();
		cy.get('a[href="/Crew"]').click();
		cy.url().should("include", "/Crew");

		cy.get(".divTable").should("exist");

		cy.contains("td", createdCrew.name)
			.parent("tr")
			.within(() => {
				cy.get(".edit_btn").click();
			});

		cy.get('input[id="crewman"]').clear().type(updatedCrew.crewmans);

		cy.get(".btn").click();

		cy.get(".close").should("exist").click();

		cy.get(".divTable").should("exist");

		cy.get(".divTable td").should("contain", updatedCrew.name);
	});

	it("should navigate into the crew page and delete an existing crew", () => {
		cy.get("#navbar_btn").click();
		cy.get('a[href="/Crew"]').click();
		cy.url().should("include", "/Crew");

		cy.get(".divTable").should("exist");

		cy.contains("td", updatedCrew.name)
			.parent("tr")
			.within(() => {
				cy.get(".del_btn").click();
			});

		cy.get(".divTable").should("not.contain", updatedCrew.name);
	});
});
