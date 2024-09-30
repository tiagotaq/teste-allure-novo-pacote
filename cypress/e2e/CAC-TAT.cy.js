describe('Central de Atendimento ao Cliente TAT', function () {
  const THREE_SECONDS_IN_MS = 3000

  beforeEach(function () {
    cy.visit('../../src/index.html')
  })

  Cypress._.times(2, function () {
    it('verifica o título da aplicação', function () {
      cy.title().should('be.equals', 'Central de Atendimento ao Cliente TAT EDITADO')
    })
  })

  // it('preenche os campos obrigatórios e envia o formulário', function () {

  //   const textoGrande = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique lorem augue, eget tincidunt turpis ornare sed. Quisque suscipit feugiat velit sit amet venenatis. Pellentesque fermentum vestibulum orci tempor posuere. Ut vel eros in ipsum scelerisque ultrices vitae mollis orci. Duis ut magna non mauris lobortis tincidunt. Donec posuere sapien eu urna ullamcorper auctor. Suspendisse potenti. Fusce nunc elit, malesuada a commodo congue, consectetur at sem. Suspendisse lobortis ligula nunc, sed ornare velit euismod in. In id iaculis enim. Sed mattis tempor leo varius accumsan.'

  //   cy.clock()

  //   cy.get('#firstName').type('Tiago')
  //   cy.get('#lastName').type('Andrade')
  //   cy.get('#email').type('tiago@email.com')
  //   cy.get('#open-text-area').type(textoGrande, { delay: 0 })
  //   cy.contains('button', 'Enviar').click()
  //   cy.get('.success').should('be.visible')
  //   cy.tick(THREE_SECONDS_IN_MS)
  //   cy.get('.success').should('not.be.visible')
  // })

  // it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
  //   cy.clock()
  //   cy.get('#firstName').type('Tiago')
  //   cy.get('#lastName').type('Andrade')
  //   cy.get('#email').type('tiago')
  //   cy.get('#open-text-area').type('Lorem ipsum dolor sit amet')
  //   cy.contains('button', 'Enviar').click()
  //   cy.get('.error').should('be.visible')
  //   cy.tick(THREE_SECONDS_IN_MS)
  //   cy.get('.success').should('not.be.visible')
  // })

  // it('verifica se campo de telefone só aceita números', function () {
  //   cy.get('#phone')
  //     .type('ascdef')
  //     .should('have.value', '')
  // })

  // it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () {
  //   cy.clock()
  //   cy.get('#firstName').type('Tiago')
  //   cy.get('#lastName').type('Andrade')
  //   cy.get('#email').type('tiago@email.com')
  //   cy.get('#open-text-area').type('Lorem ipsum dolor sit amet')
  //   cy.get('#phone-checkbox').check()
  //   cy.contains('button', 'Enviar').click()
  //   cy.get('.error').should('be.visible')
  //   cy.tick(THREE_SECONDS_IN_MS)
  //   cy.get('.error').should('not.be.visible')
  // })

  // it('preenche e limpa os campos nome, sobrenome, email e telefone', function () {
  //   cy.get('#firstName').type('Tiago').should('have.value', 'Tiago').clear().should('have.value', '')
  //   cy.get('#lastName').type('Andrade').should('have.value', 'Andrade').clear().should('have.value', '')
  //   cy.get('#email').type('tiago@email.com').should('have.value', 'tiago@email.com').clear().should('have.value', '')
  //   cy.get('#phone').type('02199999999').should('have.value', '02199999999').clear().should('have.value', '')
  // })

  // it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function () {
  //   cy.get('button[type="submit"]').click()
  //   cy.get('.error').should('be.visible')
  // })

  // it('envia o formuário com sucesso usando um comando customizado ', function () {
  //   cy.clock()
  //   cy.fillMandatoryFieldsAndSubmit()
  //   cy.get('.success').should('be.visible')
  //   cy.tick(THREE_SECONDS_IN_MS)
  //   cy.get('.success').should('not.be.visible')
  // })

  // it('seleciona um produto (YouTube) por seu texto', function () {
  //   cy.get('#product').select('YouTube').should('have.value', 'youtube')
  // })

  // it('seleciona um produto (Mentoria) por seu valor (value)', function () {
  //   cy.get('#product').select('mentoria').should('have.value', 'mentoria')
  // })

  // it('seleciona um produto (Blog) por seu índice', function () {
  //   cy.get('#product').select(1).should('have.value', 'blog')
  // })

  // it('marca o tipo de atendimento "Feedback"', function () {
  //   cy.get('input[type="radio"][value="feedback"]')
  //     .check()
  //     .should('have.value', 'feedback')
  // })

  // it('marca cada tipo de atendimento', function () {
  //   cy.get('input[type="radio"]')
  //     .should('have.length', 3)
  //     .each(function (radio) {
  //       cy.wrap(radio).check()
  //       cy.wrap(radio).should('be.checked')
  //     })
  // })


  // it('marca ambos checkboxes, depois desmarca o último', function () {
  //   cy.get('input[type="checkbox"]')
  //     .check() //o check pode ser usado para marcar vários em um array
  //     .should('be.checked') //o should valida todos do array
  //     .last()
  //     .uncheck()
  //     .should('not.be.checked')
  // })

  // it('seleciona um arquivo da pasta fixtures', function () {
  //   cy.get('input[type="file"]')
  //     .should('not.have.value')
  //     .selectFile('cypress/fixtures/example.json')
  //     .should(function (input) {
  //       expect(input[0].files[0].name).to.equal('example.json')
  //     })
  // })

  // it('seleciona um arquivo simulando um drag-and-drop', function () {
  //   cy.get('input[type="file"]')
  //     .should('not.have.value')
  //     .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' }) // com esse segundo parâmetro, que é um objeto com a propriedade action como 'drag-drop', ele simula como se estivesse adicionando o arquivo arrastando e soltando
  //     .should(function (input) {
  //       expect(input[0].files[0].name).to.equal('example.json')
  //     })
  // })

  // it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function () {
  //   cy.fixture('example.json').as('arquivo')
  //   cy.get('input[type="file"]')
  //     .should('not.have.value')
  //     .selectFile('@arquivo')
  //     .should(function (input) {
  //       expect(input[0].files[0].name).to.equal('example.json')
  //     })
  // })

  // it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function () {
  //   cy.get('#privacy a').should('have.attr', 'target', '_blank')
  // })

  // it('acessa a página da política de privacidade removendo o target e então clicando no link', function () {
  //   cy.get('#privacy a').invoke('removeAttr', 'target').click();
  //   cy.contains('Talking About Testing').should('be.visible')
  // })
})