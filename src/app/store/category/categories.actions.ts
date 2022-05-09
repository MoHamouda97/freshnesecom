import { createAction, props } from "@ngrx/store";

export const getCategories = createAction(
    "[App Resolver] Get Categories"
);

export const categoriesLoaded = createAction(
    "[Load Categories Effect] All Categories Loaded",
    props<{categories: string[]}>()
);