const { UrlConstants } = require("../constants/url-constants.js")
const { LoginPage } = require("../pages/login-page.js")
const { NavigationPage } = require("../pages/navigation-pages.js")

describe('login', () => {
    before(() => {
        cy.fixture("users.json").as('users')
        cy.visit(Cypress.env('baseUrl') + UrlConstants.LOGIN_URL)
    })
    it('login', function () {
        cy.login(this.users.username, this.users.password)
    })
})