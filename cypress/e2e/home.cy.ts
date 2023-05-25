export {}

describe('Home test', () => {
  beforeEach(() => {
        cy.visit('http://localhost:3000/')
  })

  context('Hero section', () => {
    it('the h1 contains correct text', () => {
      cy.getByDataAttr('hero-heading').contains('Testing Next.js Applications with Cypress')
    })

    it('the features on the home page are correct', () => {
      cy.get('dt').eq(0).contains('4 Courses')
      cy.get('dt').eq(1).contains('25+ Lessons')
      cy.get('dt').eq(2).contains('Free and Open Source')
    })
  })

  context('Courses section', () => {
    const testData = [
      { courseValue: 'course-0', expectedText: 'Testing Your First Next.js Application', expectedLink: '/testing-your-first-application' },
      { courseValue: 'course-1', expectedText: 'Testing Foundations', expectedLink: '/testing-foundations' },
      { courseValue: 'course-2', expectedText: 'Cypress Fundamentals', expectedLink: '/cypress-fundamentals' }
    ]

    testData.forEach(({courseValue, expectedText, expectedLink}) => {
      it(`Course: ${expectedText}`, () => {
        cy.getByDataAttr(courseValue).getByDataAttr('course-title').contains(expectedText)
      })

      it(`Course: transition to the ${courseValue} link`, () => {
        cy.getByDataAttr(courseValue).find('a').contains('Get started').click()
        cy.location('pathname').should('equal', expectedLink)
      })
    })
  })
})