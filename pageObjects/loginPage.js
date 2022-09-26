const { expect } = require('@playwright/test')

class LoginPage {

	constructor(page) {
		this.page = page
		this.link = 'http://the-internet.herokuapp.com/login'
		this.usernameField = page.locator('id=username')
		this.passwordField = page.locator('id=password')
		this.loginButton = page.locator('button:has-text("Login")')
		this.secureHeader = page.locator('h2:has-text("Secure Area")')
		this.errorBar = page.locator('id=flash')
	}

	async goto() {
		await this.page.goto(this.link)
	}

	async loginFill(login) {
		await this.usernameField.fill(login)
	}

	async passwordFill(password) {
		await this.passwordField.fill(password)
	}

	async loginButtonClick() {
		await this.loginButton.click()
	}

	async login(login, password) {
		await this.loginFill(login)
		await this.passwordFill(password)
		await this.loginButtonClick()
	}

	async expectSecure() {
		await expect(this.secureHeader).toBeVisible()
	}

	async expectErrorText(message) {
		await expect(this.errorBar).toBeVisible()
		await expect(this.errorBar).toContainText(message)
	}
}

module.exports = {LoginPage}