# React: Testing and Redux Lab 
In this lab, you will be refactoring the Jeapardy component to rely on Redux for Centralized state. You will also write a suite of tests using Jest and Enzyme.

This repo is intended to serve as a starter. Please fork then clone this repo to complete the lab.

## Create Tests

### Gameboard Tests
* Create a test for the **Gameboard** component that verifies that the **Gameboard** component takes a question object as one of its props.
* Write a test that checks the output of rendering the **Gameboard** component and assert it actually displays a questionData passing is a prop.
* Write a test for the **Gameboard** that verifies the users score goes up if the question is answered correctly
* Write a test for the **Gameboard** that verifies the users score goes down if the question is answered correctly
* Create one more test of your choosing

### Categories Tests
* Create a test for the **Categories** component that verifies that the **Categories** component takes a an array of categories as a prop.
* Write a test that checks the output of rendering the **Categories** component and assert it actually displays the categories passed in as prop.
* Create one more test of your choosing

### Jeopardy Tests
* Create a test for the **Jeopardy** component that verifies the users score starts at 0
* Write a test for the **Jeopardy** component that verifies the `getCategories()` method has been called if it was rendered
* Create one more test of your choosing

## Implement Redux

* Install `redux` and `react-redux` as dependencies for your application
* Create the your actions. Think about what methods in the **Jeopardy** affect state when you are deciding what actions you may need.
* Create your reducuers that handle the actions you created in the previous step. 
  * Don't forget to combine your reducers for the store
* Create a container for your **Jeaopardy** component that you will render in it's place.
* Update the **Jeaopardy** component to rely on the props mapped from the centralized instead of its local state.
* Update index.js to proved a store to our application
* Refactor any failing tests
