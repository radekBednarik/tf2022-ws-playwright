const { test } = require('@playwright/test')
const { LoginPage } = require('../pageObjects/loginPage')

test('login', async({page}) => {
    const loginPage = new LoginPage(page)

    await loginPage.goto()
    await loginPage.loginE2E('tomsmith', 'SuperSecretPassword!')
    await loginPage.expectSecure()    
})

test('login negative', async({page}) => {
    const loginPage = new LoginPage(page)

    await loginPage.goto()
    await loginPage.loginE2E('tomsmith', 'Super')
    await loginPage.expectSecure()    
})