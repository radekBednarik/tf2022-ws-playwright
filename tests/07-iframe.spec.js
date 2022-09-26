const { test } = require('@playwright/test')

test('iframe wrong', async ({page}) => { 
    await page.goto('https://the-internet.herokuapp.com/iframe')

    const textBox = page.locator('id=tinymce')

    await textBox.fill('Playwright workshop 2022')

})

test('iframe', async ({page}) => { 
    await page.goto('https://the-internet.herokuapp.com/iframe')

    const textBox = page.frameLocator('id=mce_0_ifr').locator('id=tinymce')

    await textBox.fill('Playwright workshop 2022')

})