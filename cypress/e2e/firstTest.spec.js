import {navigateTo} from "../support/page_objects/navigationPage";

describe('First test suite', () => {

  beforeEach('open application', () => {
    cy.visit('/')
  })

  it.only('First test', () => {
      navigateTo.formLayoutsPage()
      //navigateTo.datepickerPage()
      cy.contains('[status="warning"]', 'Sign in')
    }
  )

})
