import { mount } from 'cypress-vue-unit-test'
import App from '@/App'
import { config as routerConfig } from '@/router'
import VueRouter from 'vue-router'

routerConfig.mode = 'abstract'

describe('App', () => {
  it('renders the homepage', () => {

    mount(App, {
      router: new VueRouter(routerConfig),
      plugins: [VueRouter],
    })

    cy.get('[data-testid=home-page]').should('be.visible')
    cy.get('[data-testid=about-link]').click()
    cy.get('[data-testid=home-page]').should('not.be.visible')
    cy.get('[data-testid=about-page]').should('be.visible')
    cy.get('[data-testid=home-link]').click()
    cy.get('[data-testid=home-page]').should('be.visible')
    cy.get('[data-testid=about-page]').should('not.be.visible')
  })
})
