const { test, expect } = require('@playwright/test')

test('Expects', async ({ page }) => {
    await page.goto('https://www.tesena.com/')
    const cssLocator = page.locator('#menu-secondary >> a')

    await expect(cssLocator).toBeVisible()
    await expect(cssLocator).toHaveText('Contact us')
    await expect(cssLocator).toHaveText(/ontact u/)

    await expect(cssLocator, 'Michal is not here!!!').toHaveText('Michal')
})

test('Negative expect', async ({ page }) => {
    await page.goto('https://www.tesena.com/')
    const cssLocator = page.locator('#menu-secondary >> a')
    await expect(cssLocator).not.toHaveText('Michal')
})