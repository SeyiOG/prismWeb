class loginPage{
	elements = {
		appLauncher: ()=> cy.visit('https://useprism.co/auth/login'),
		passField: ()=> cy.get('#xx3tb7innd'),
		usernField: ()=> cy.get('#3ncbtzg8ogu'),
		loginBtn: ()=> cy.get('[type="submit"]'),
		sideBar: ()=> cy.get('.sidebar__inner'),
		error1: ()=> cy.get('[class="lead text-center py-3"]').contains(' Invalid Password. Please check and try again. '),
		error2: ()=> cy.get('[class="lead text-center py-3"]').contains(' Please fill out the form correctly. ')
	}

	enterUsername(username){
		this.elements.usernField().type(username)
		cy.wait(500)
	}

	enterPassword(password){
		this.elements.passField().type(password)
		cy.wait(500)
	}

	clickLogin(){
		cy.wait(1000)
		this.elements.loginBtn().click()
		cy.wait(1000)
	}

	seeError1(){
		cy.wait(1000)
		this.elements.error1().should('be.visible')
	}

	seeError2(){
		cy.wait(1000)
		this.elements.error2().should('be.visible')
	}
}

module.exports = new loginPage()