Feature: this is for api tests

  Background:

  Scenario: rest api testing
    Given url 'https://reqres.in/api/users/23'
    * method POST
    * print response
    * match response.id == '348'

