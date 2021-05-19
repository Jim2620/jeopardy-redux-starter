import * as types from "./actionTypes";

export function getCategories(categories) {
    return { type: types.GET_CATEGORIES, categories };
}