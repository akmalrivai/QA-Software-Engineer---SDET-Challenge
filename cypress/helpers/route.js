export const BASE_URL = {
    base_URL: Cypress.env("baseUrl")
}

export function visit(routes) {
    cy.visit(BASE_URL.base_URL + routes)
}