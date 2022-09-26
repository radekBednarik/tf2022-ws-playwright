const { test, expect } = require('@playwright/test')

test('Validation test', async ({ page }) => {
    const contactButton = page.locator('a:has-text("Contact us")')
    const errorMessage = page.locator('id=field-wrapper-email >> .field-message--error')
    const nameField = page.locator('id=field-name')
    const submitButton = page.locator('id=field-field_form_1_3_0_0')

    await page.goto('https://www.tesena.com/')
    await contactButton.click()
    await expect(errorMessage).not.toBeVisible()
    await nameField.fill('Michal Kopriva')
    await submitButton.click()
    await expect(errorMessage).toBeVisible()
})