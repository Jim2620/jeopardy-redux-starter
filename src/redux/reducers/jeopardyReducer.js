import * as types from "../actions/actionTypes";

const initialState = {
  questionData: {},
  categories: [],
  score: 0
}

export default function jeopardyReducer(state = initialState, action) {

  switch (action.type) {
    
    case types.GET_CATEGORIES:
      return Object.assign({}, state, {categories: action.categories} );

    case types.GET_QUESTION:
      return Object.assign({}, state, {questionData: action.questionData} );
    
    case types.UPDATE_SCORE:
      return Object.assign({}, state, {score: action.score, questionData: {}} );

    default:
      return state;
  }
}
