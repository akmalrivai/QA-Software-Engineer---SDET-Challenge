export function get(selector) {
    return cy.get(selector) 
}

export function fillField(selector, value) {
    return cy.get(selector).type(value)
}

export function clearAndFillField(selector, value) {
    return cy.get(selector).clear().type(value)
}

export function fillFieldAndEnter(selector, value) {
    return cy.get(selector).type(value, { force: true }).type('{enter}')
}

export function click(selector){
    return cy.get(selector).click()
}
// export function clickAndWait(selector, value){
//     return  cy.get(selector).should('have.class', value).then(() => {
//         cy.get(selector).click()
//         cy.wait(value)
//     })
// }

export function select(selector, value){
    return cy.get(selector).select(value);
}

// export function clickDropDown(selector, value){
//     return cy.get(selector).contains(value).click()
// }

export function clickDropDown(selector, value) {

  // Pilih opsi dari dropdown yang muncul
  cy.get('body')
    .contains(selector, value)
    .click();
}

export function selectRoleOption(selector, value) {
    cy.contains(selector, value).click();
}


export function uploadFile(selector, fileName){
    return cy.get(selector).selectFile(fileName, { force: true }).trigger('change', { force: true })
}

export function forceClick(selector){
    return cy.get(selector).click({force:true})
}

export function wait(value){
    return cy.wait(value)
}