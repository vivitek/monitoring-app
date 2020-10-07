describe('Login Page', () => {
    it('Login', () => {
        cy.visit('http://localhost:3000/login')

        cy.wait(1000)
    })
})

describe('Register Page', () => {
    it('Resgister', () => {
        cy.visit('http://localhost:3000/register')

        cy.wait(1000)
    })
})

describe('Register on website', () => {
    it('Sign in', () => {
        cy.visit('http://localhost:3000/register')

        cy.get('#email')
            .type('email@email.com')
        
        cy.get('#username')
            .type('test')
            
        cy.get('#password')
            .type('Azerty12*')

        cy.get('#confirmPassword')
            .type('Azerty12*')

        cy.get('.btn').click()

        cy.wait(1000)
    })
})

describe('Log in on website', () => {
    it('Log in', () => {
        login()

        cy.wait(1000)
    })
})

describe('Create New Routeur', () => {
    it('New Routeur', () => {
        login()

        cy.get('.swal2-confirm').click()

        cy.get('.mr-auto > :nth-child(1) > .nav-link').click()

        cy.get('.col > .btn').click()

        cy.get('#name')
            .type('Routeur Test')

        cy.get('.btn-primary').click()

        cy.wait(1000)
    })
})

describe('See new Connection', () => {
    it('Connection', () => {
        login()

        cy.get('.swal2-confirm').click()

        cy.get('.mr-auto > :nth-child(1) > .nav-link').click()

        cy.get(':nth-child(1) > [style="opacity: 1; transform: none;"] > .card > .card-body > :nth-child(4) > .btn').click()

        cy.get('.swal2-confirm').click()

        cy.get('.mr-auto > :nth-child(2) > .nav-link').click()

        cy.wait(1000)
    })
})

describe('Test Logout', () => {
    it('logout', () => {
        login()

        cy.get('.swal2-confirm').click()

        cy.get(':nth-child(2) > :nth-child(2) > .nav-link').click()

        cy.wait(1000)
    })
})

function login()
{
    cy.visit('http://localhost:3000/login')

        cy.get('#email')
            .type('email@email.com')

        cy.get('#password')
            .type('Azerty12*')

        cy.get('.btn').click()   
}