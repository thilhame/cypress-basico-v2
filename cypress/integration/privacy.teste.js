//_. => significa Lodash
Cypress._.times(3,function(){
    it.only('testa a pagina varias vezes pelo metodo _.times',function(){
        cy.visit('./src/privacy.html')

        cy.contains('Talking About Testing').should('be.visible')
    })
})