export {}

describe('User Journey', () => {
    it("a user can find a course on the home page and complete the courses lessons", () => {
        cy.visit('http://localhost:3000/')
        cy.getElemByDataAttr('course-0').find('a').contains('Get started').click()
        cy.location('pathname').should('equal', '/testing-your-first-application')
        cy.locationShouldBe('/testing-your-first-application')

        cy.getElemByDataAttr('next-lesson-button').should('exist').contains('Start Course').click()
        cy.locationShouldBe('/testing-your-first-application/app-install-and-overview')

        cy.getElemByDataAttr('challenge-answer-0').click()
        cy.getElemByDataAttr('next-lesson-button').should('exist').contains('Next Lesson').click()
        cy.locationShouldBe('/testing-your-first-application/installing-cypress-and-writing-our-first-test')

        cy.getElemByDataAttr('challenge-answer-0').click()
        cy.getElemByDataAttr('next-lesson-button').should('exist').contains('Next Lesson').click()
        cy.locationShouldBe('/testing-your-first-application/setting-up-data-before-each-test')

        cy.getElemByDataAttr('challenge-answer-0').click()
        cy.getElemByDataAttr('next-lesson-button').should('exist').contains('Complete Course').click()
        cy.locationShouldBe('/')
    })

})