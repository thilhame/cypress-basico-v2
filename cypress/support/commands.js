
 Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(){
    cy.get('#firstName').type('thiago')
      cy.get('#lastName').type('filho')
      cy.get('#email').type('teste@hotmail')
      cy.get('#open-text-area').type('teste do comando novo')
      cy.get('.button[type="submit"]').click()
 })

