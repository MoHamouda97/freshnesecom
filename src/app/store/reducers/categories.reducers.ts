import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on, State } from "@ngrx/store";
import { CategoriesActions } from "../category/categories.action-types";

export interface CategoriesState {
    categories: string[]
    CategoriesLoaded: boolean
}

export const initCategories = {
    categories: [],
    CategoriesLoaded: false
}

export const categoriesReducer = createReducer(
    initCategories,
    on(CategoriesActions.categoriesLoaded, (state: any, action: any) => {
        return {
            categories: action.categories,
            CategoriesLoaded: true
        }
    })
)