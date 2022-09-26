const { test } = require('@playwright/test')

test('upload', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/upload')
    const upload = page.locator('id=file-upload')
    await upload.setInputFiles('uploadMe.txt')
    await page.pause()
})