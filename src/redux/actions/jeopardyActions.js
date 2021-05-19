import * as types from "./actionTypes";

export function getCategories(categories) {
    return { type: types.GET_CATEGORIES, categories };
}

export function getQuestion(questionData) {
    return { type: types.GET_QUESTION, questionData };
}

export function updateScore(score) {
    return { type: types.UPDATE_SCORE, score };
}