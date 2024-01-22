// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />



describe('Central de Atendimento ao Cliente TAT', function() {
  this.beforeEach(function(){
   cy.visit('./src/index.html')
    //cy.visit('https://www.santander.com.br/')
  })
    it('verifica o título da aplicação', function() {
      cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
    })
    it('preenche os campos obrigatórios e envia o formulário', function() {
        const longText = 'familia,familia,familia,familia,familia,familia, familia'
      cy.get('#firstName').type('thiago')
      cy.get('#lastName').type('filho')
      cy.get('#email').type('teste@hotmail')
      cy.get('#phone-checkbox').check()
      cy.get('#open-text-area').type(longText,{delay:0})
      cy.get('.button[type="submit"]').click()
    })
it('campo telefonico continua vazio quando preenchido com valor não-numerico',function(){
  cy.get('#phone').type('bacdfdgadfd')
})
it('limpa os campos preenchidos',function(){
  cy.get('#firstName').type('thiago')
  .should('have.value','thiago')
  .clear()
})
it('exibir mensagem de erro ao entrar no site',function(){
  cy.get('.button[type="submit"]').click()

  cy.get('.error').should('be.visible')
})
it('criar um comando customizado',function(){
  cy.fillMandatoryFieldsAndSubmit()

  cy.get('.success').should('be.visible', { timeout: 10000 }); // Aumente para 10 segundos (ou mais, se necessário)

})
it('fazer um select por um texto das opções', function(){
  cy.get('#product') //pega o id
  .select('YouTube') // pega o texto da opção
  .should('have.value','youtube') // valida se esta correta a informação selecionada
})

it('selecionar um produto pelo seu valor', function(){
        var teste = 'mentoria'
        cy.get('#product')
        .select(teste)
        .should('have.value', teste)
})
it('seleciona produto pela sua posição do indice', function(){
  cy.get('#product')
  .select(1)// selecionando pelo indice
  .should('have.value', 'blog')
})
it('marca o tipo de checkbox', function(){
  cy.get('input[type="radio"][value="feedback"]')
  .check()
  .should('have.value','feedback')
})
it('marca tipo de seleção',function(){
  cy.get('input[type="radio"]')
.should('have.length',3)
.each(function($radio){
  cy.wrap($radio).check()
  cy.wrap($radio).should('be.checked')
})
})
it('marca e desmarca ultimo checkbox',function(){
  cy.get('input[type="checkbox"]')
  .check()
  .last()
  .uncheck()
  .should('not.be.checked')
})
it('campo telefonico continua vazio quando preenchido com valor não-numerico',function(){
  cy.get('#phone')
  .type('12123213234324')
  .should('have.value','')
  
})

// it('selecionar o um arquivo para pasta fixtures', function(){
//   cy.get('input[type="file"]')
//   .should('not.have.value')
//   .selectFile('./cypress/fixtures/example.json')
//   .should(function($input){
//     expect($input[0].files[0].name).to.equal('example.json')
//   })
// })

// it('selecionar o um arquivo simulando um drag-drop(arrastar para dentro da pg)', function(){
//   cy.get('input[type="file"]')
//   .should('not.have.value')
//   .selectFile('./cypress/fixtures/example.json',{action:"drag-drop"})
//   .should(function($input){
//     expect($input[0].files[0].name).to.equal('example.json')
//   })
// })

// it.only('seleciona um arquivo utilizando uma fixture para a qual foi dadda um alias',function(){
//   cy.fixture('example.json').as('sampleFile')
//   cy.get('input[type="file"]')
//   .should(function($input){
//     expect($input[0].files[0].name).to.equal('example.json')
// })
//   })

it('lidando com links que abrem em outra pagina',function(){
  cy.get('#privacy a').invoke('removeAttr','target').click()
   cy.contains('Talking About Testing').should('be.visible')
  
})
it.only('exibe e esconde as mensagens de sucesso e erro usando o .invoke', () => {
  cy.get('.success')
    .should('not.be.visible')
    .invoke('show')
    .should('be.visible')
    .and('contain', 'Mensagem enviada com sucesso.')
    .invoke('hide')
    .should('not.be.visible')
  cy.get('.error')
    .should('not.be.visible')
    .invoke('show')
    .should('be.visible')
    .and('contain', 'Valide os campos obrigatórios!')
    .invoke('hide')
    .should('not.be.visible')
})

it.only('faça um requesição HTTP', function(){
  cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
  .should(function(response){
   const{status, statusText, body} = response
   expect(status).to.equal(200)
   expect(statusText).to.equal('OK')
   expect(body).to.include('CAC TAT')
  
  })
  
})

})

