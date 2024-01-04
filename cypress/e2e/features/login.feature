Feature: Login Feature

    Background:
    Given user visits the prism login page
    

    Scenario: User successfully logs in with valid login credentials
        When user enters username and password as "ogunnubiseyi@gmail.com" and "Test@123"
        And user clicks login
        Then user is successfully logged in and is navigated to the homepage

    Scenario: User cannot login with invalid credentials
        When user enters username and password as "ogunnubiseyi@gmail.com" and "invalidpassword"
        And user clicks login
        Then user sees error message from the system

    Scenario: User cannot leave a field blank
        When user enters username as "ogunnubiseyi@gmail.com"
        And user clicks login
        Then user sees an error message from the system