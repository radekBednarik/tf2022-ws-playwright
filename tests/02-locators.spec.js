const { test, expec } = require('@playwright/test')

// This is only for demonstartion of different locator options.
// This test will fail if run.
test('Locators', async ({ page }) => {
    await page.goto('https://www.tesena.com/en')

    // text
    const textLocator = page.locator('text=Contact us')
    await textLocator.click()

    // id
    const idLocator = page.locator('id=field-name')
    await idLocator.fill('some text')

    // custom - data-test, data-test-id, data-testid
    const dataTestLocator = page.locator('data-test=field-name')

    // css
    const cssLocator = page.locator('a:has-text("Contact us")')

    // css combination
    const cssCombined = page.locator('#menu-secondary >> a ')

    // or
    const cssCombined2 = page.locator('form >> button')
    await cssCombined2.click()

    // xpath
    const xpath = page.locator('//*[@id="menu-19"]/li/a/span')

    // you can use locators like this
    await page.locator('a:has-text("Contact us")').click()
})