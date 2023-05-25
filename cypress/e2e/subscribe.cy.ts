export {}

describe('Subscribe test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('allows user to subscribe to the email list ', () => {
        const email = 'test@gmail.com'
        cy.getElemByDataAttr('email-input').type(email)
        cy.getElemByDataAttr('submit-button').click()
        cy.getElemByDataAttr('success-message').should('exist').contains(`Success: ${email} has been successfully subscribed`)
    });

    it('Does not allows user to subscribe to the email list ', () => {
        const email = 'test'
        cy.getElemByDataAttr('email-input').type(email)
        cy.getElemByDataAttr('submit-button').click()
        cy.getElemByDataAttr('success-message').should('not.exist')
    });

    it('Does not allows user who are already subscribed to subscribe to the email list ', () => {
        const email = 'john@example.com'
        cy.getElemByDataAttr('email-input').type(email)
        cy.getElemByDataAttr('submit-button').click()
        cy.getElemByDataAttr('server-error-message').should('exist').contains(`Error: ${email} already exists. Please use a different email address.`)
    });
})