import * as types from "./actionTypes";

export function getCategories(categories) {
  return { type: types.GET_CATEGORIES, categories };
}
export function questionData(questionData) {
  return { type: types.QUESTION_DATA, questionData };
}
export function score(score) {
  return { type: types.SCORE, score };
}
