import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CategoriesState } from "../reducers/categories.reducers";

export const selectCategoriesState = createFeatureSelector<CategoriesState>("Categories");

export const selectAllCategories = createSelector(
    selectCategoriesState,
    state => state.categories
)

export const isCategoriesLoaded = createSelector(
    selectCategoriesState,
    state => state.CategoriesLoaded
)