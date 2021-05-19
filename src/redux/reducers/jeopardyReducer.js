import * as types from "../actions/actionTypes";

//Inital state for the Jeopardy game
const initialState = {
  questionData: {},
  categories: [],
  score: 0
}

export default function jeopardyReducer(state = initialState, action) {

  switch (action.type) {
    
    //CASE FOR GET_CATEGORIES
    case types.GET_CATEGORIES:
      return Object.assign({}, state, {categories: action.categories} );


    default:
      return state;
  }
}
