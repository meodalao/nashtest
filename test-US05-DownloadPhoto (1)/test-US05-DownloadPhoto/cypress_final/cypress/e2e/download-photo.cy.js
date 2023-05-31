import { UrlConstants } from "../constants/url-constants"
import { HomePage } from "../pages/home-page"
import { PhotoDetailPage } from "../pages/photo-detail-page"

describe('download photo', () => {
    before(() => {
        cy.visit(Cypress.env('baseUrl') + UrlConstants.LOGIN_URL)
        cy.loginWithDefaultAccount()
    })
    it('download photo successfully', () => {
        HomePage.clickFirstImage()
        PhotoDetailPage.clickDownloadBtn()
    })
})