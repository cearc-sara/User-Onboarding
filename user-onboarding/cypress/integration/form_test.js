describe('User App', () => {
    describe('Inputs', () => {
        it('can navigate to http://localhost:3000/', () => {
            cy.visit('http://localhost:3000/')
            cy.url().should('include', 'localhost')
        })
        it('can type something in the "first_name" input', () => {
            cy.get('input[name="first_name"]')
            .type('Sam')
            .should('have.value', 'Sam')
        })
        it('can type something in the "last_name" input', () => {
            cy.get('input[name="last_name"]')
            .type('Solman')
            .should('have.value', 'Solman')
        })
        it('can type something in the "email" input', () => {
            cy.get('input[name="email"]')
            .type('sSolman@gmail.com')
            .should('have.value', 'sSolman@gmail.com')
        })
        it('can type something in the "password" input', () => {
            cy.get('input[name="password"]')
            .type('SamSolman')
            .should('have.value', 'SamSolman')
        })
        it('can select something in the "role" drop down menu', () => {
            cy.get('select')
            .select('Student')
            .should('have.value', 'student')
        })
        it('can check the agree checkbox', () => {
            cy.get('input[name="agree"]').click()
        })
        it('can check the disagree checkbox', () => {
            cy.get('input[name="disagree"]').click()
        })
        it('can click submit button', () => {
            cy.get('#submitBtn').click()
        })
    })
    describe('Validations for empty inputs', () => {
        it('checks for empty field in first name input', () => {
            cy.get('input[name="first_name"]')
            .type(' {enter}')
            .should('have.length', 1)
            .should('not.have.text', ' ')
           
        })
        it('checks for empty field in last name input',() => {
            cy.get('input[name="last_name"]')
            .type(' {enter}')
            .should('have.length', 1)
            .should('not.have.text', ' ')
        })
        it('checks for empty field in email input', () => {
            cy.get('input[name="email"]')
            .type(' {enter}')
            .should('have.length', 1)
            .should('not.have.text', ' ')
        })
        it('checks for empty field in password input', () => {
            cy.get('input[name="password"]')
            .type(' {enter}')
            .should('have.length', 1)
            .should('not.have.text', ' ')
        })
        it('checks for empty field in role input', () => {
            cy.get('select')
            .select('Student')
            .should('have.value', 'student')
            .select('--Select a Role--')
            .should('have.value', '')
        })
    })
})