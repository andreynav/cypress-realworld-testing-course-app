export {}

describe('Subscribe test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('allows user to subscribe to the email list ', () => {
        const email = 'test@gmail.com'
        cy.getByDataAttr('email-input').type(email)
        cy.getByDataAttr('submit-button').click()
        cy.getByDataAttr('success-message').should('exist').contains(`Success: ${email} has been successfully subscribed`)
    });

    it('Does not allows user to subscribe to the email list ', () => {
        const email = 'test'
        cy.getByDataAttr('email-input').type(email)
        cy.getByDataAttr('submit-button').click()
        cy.getByDataAttr('success-message').should('not.exist')
    });

    it('Does not allows user who are already subscribed to subscribe to the email list ', () => {
        const email = 'john@example.com'
        cy.getByDataAttr('email-input').type(email)
        cy.getByDataAttr('submit-button').click()
        cy.getByDataAttr('server-error-message').should('exist').contains(`Error: ${email} already exists. Please use a different email address.`)
    });
})