const { test, expect } = require('@playwright/test')


test('checkboxes', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes')

    const checkBox1 = page.locator('input >> nth=0')
    
    await expect(checkBox1).not.toBeChecked()

    await checkBox1.check()
    await expect(checkBox1).toBeChecked()
})