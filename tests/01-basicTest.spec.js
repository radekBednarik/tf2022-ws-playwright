const { test, expect } = require('@playwright/test')

test('tesena title', async ({ page }) => {
    await page.goto('https://www.tesena.com/en/')
    await expect(page).toHaveTitle(/Tesena/)
})

test('tesena title wrong', async ({ page }) => {
    await page.goto('https://www.tesena.com/en')
    await expect(page).toHaveTitle(/Workshop/)
})