# Activity: Jeopardy and Redux
In this project, you will work to convert a completed Jeopardy project using local state to rely on Redux for centralized state management.
The starter repo already has Redux added, the category actions created, and the jeopardy reducer set up to handle the initial state and the categories actions.
Your goal is to update the Jeopardy component to be a connected component and dispatch the appropriate actions where the component is currently relying on 
local state.

## Getting Started

* Fork then clone the following starter repo: https://github.com/DevelopIntelligenceBoulder/jeopardy-redux-starter

* From the root directory of the starter, run `npm install` to ensure that all of the dependencies in the `package.json` file get installed in the `node_modules` directory

* From the same directory, run `npm start` to make sure there are no errors

## Review of relevant files in the starter code 

* `src/components/jeopardy/Jeopardy.js` - This is the main jeopardy component and the only component you will be connecting centralized state. **This is the only component you will be updating for this activity**

* `src/index.js` - This is where Redux and the store are provided to the application. Review the comments in the file to see how Redux is being implemented. **You will not need to make changes to this file**

* `src/redux/configureStore.js` - This file contains the function that is imported into `src/index.js` we use to create the store. **You will not need to make changes to this file**

* `src/redux/actions/actionTypes.js` - This file contains the constants the application will use for the action types. Using constants for action types is best practice and can avoid human error as the application grows. **You WILL be updating this file to add additional constants for action types**

* `src/redux/actions/jeopardyActions.js` - This file contains the action are what we will dispatch to update the applications state. An action to handle the action type of `GET_CATEGORIES` has been provided.  **You WILL be updating this file to add additional actions**

* `src/redux/reducers/index.js` - This file combines the reducers into a single rootReducer that is imported into `src/redux/configureStore.js`. The combined reducer referred to as the rootReducer is provided to the store. **You will not need to make changes to this file**

* `src/redux/reducers/jeopardyReducer.js` - This file contains the `jeopardyReducer`. It sets up the initial state for the game and is already set up with a case to handle the `GET_CATEGORIES` action.  **You will not need to make changes to this file and add new cases for the other items in the games state (questionData and score)**


## Connect `src/components/jeopardy/Jeopardy.js` to Redux

* The **Jeopardy** component will need 3 new imports so that it has access to the **actions** in `/src/redux/jeopardyActions.js`, access to the `connect` function provided by `react-redux`, and access to `bindActionCreators` from `redux` to make it easy to dispatch the actions. These imports can be placed below the other imports at the top of the component.

    ```js
        import { connect } from "react-redux";
        import * as jeopardyActions from "../../redux/actions/jeopardyActions";
        import { bindActionCreators } from "redux";
    ```

* You will need to create 2 functions: `mapStateToProps` and `mapDispatchToProps`. The functions should go below the component but above the export statement.

    **The code below is set up to handle mapping the categories from state to props on the component and map all your actions as props under `this.props.actions` as well**  
    ```js

    //get the categories from state and map them to this.props.categories on the Jeopardy component
    function mapStateToProps(state) {
        return {
            categories: state.jeopardy.categories,
        };
    }

    //YOU WILL NOT NEED TO UPDATE THIS FUNCTION
    //maps all the jeopardy actions from src/redux/actions/jeopardyActions.js to this.props.actions
    function mapDispatchToProps(dispatch) {
        return {
            actions: bindActionCreators(jeopardyActions, dispatch)
        };
    }
    ```

* You will need to use the `connect` function provided by `react-redux` to connect the Jeopardy component to the redux store. Connect takes the two functions we just created as parameters. You should replace the current export statement with the one in the example below.

    **The code below is set up to handle mapping the categories from state to props on the component and map all your actions as props under `this.props.actions` as well**  
    ```js
    export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(Jeopardy);
    ```

## Get Categories From Redux
The application needs to be updated to pull the categories from our store. Let's see how we can update the code we have to accomplish this.

* Remove `categories` from local state by updating our constructor

    **The constructor should look like this when completed**
    ```js
    constructor(props) {
        super(props);
        this.client = new JeopardyService();
        this.state = {
            questionData: {},
            score: 0
        }
    }
    ```

* Update the `<Category/>` component in the `render` method of the Jeopardy component to receive `this.props.categories` as the value for the `categories` prop instead of `this.state.categories`. This will ensure we are using the props passed to the component from `mapStateToProps` instead of the categories that were defined in the component's local state.

    **The code should look like this when completed**
    ```js

        return  <Categories clickHandler={this.getQuestion} categories={this.props.categories} />
    }
    ```

* Update the `getCategories` method to dispatch the `getCategories` action provided to the component through `mapDispatchToProps`. This will replace the existing code in the method that currently updates local state after the API call to get the categories

    **The `getCategories` method should look like this when completed**
    ```js
        getCategories = () => {
            return this.client.getCategories(3).then(result => {

                //dispatch our action passing in the categories.
                this.props.actions.getCategories(result.data)
            })
        }
    ```

* Test the application to make sure it still works as expected. It may be good to open the [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) and see how the categories are flowing in the application

## On Your Own
Using categories as an example, update the Jeopardy component to remove **questionData** and **score** from local state and manage them through Redux.

**Handling questionsData**  
- Add an action type for getting the question data in `src/redux/actions/actionTypes.js`
- Add the action creator that returns the action needed for getting question data to `src/redux/actions/jeopardyActions.js`
- Add the appropriate case to the reducer in `src/redux/reducers/jeopardyReducer.js` to handle the newly created action 
- Update the Jeopardy component to ensure it is getting the **questionData** as a prop from the store and not relying on **questionData** in local state.
- Update the Jeopardy component to ensure it is dispatching the appropriate action when getting new **questionData** from the API.

**Handling score**  
- Add an action type for updating the score in `src/redux/actions/actionTypes.js`
- Add the action creator that returns the action needed for updating the score to `src/redux/actions/jeopardyActions.js`
- Add the appropriate case to the reducer in `src/redux/reducers/jeopardyReducer.js` to handle the newly created action 
- Update the Jeopardy component to ensure it is getting the **score** as a prop from the store and not relying on **score** in local state.
- Update the Jeopardy component to ensure it is dispatching the appropriate action when updating the **score** during the game.

