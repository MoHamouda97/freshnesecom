import * as fromSelectors from './categories.selectors';
import * as fromReducer from './../reducers/categories.reducers';
import { CategoriesActions } from './categories.action-types';

describe('Categories Selector', () => {
    it('sholud select all categories', () => {
        const { initCategories } = fromReducer;
        const state = fromReducer.categoriesReducer(initCategories, CategoriesActions.getCategories);

        const result = fromSelectors.selectAllCategories.projector(state);
        expect(result.length).toEqual(0)
    });

    it('sholud categories not loaded', () => {
        const { initCategories } = fromReducer;
        const state = fromReducer.categoriesReducer(initCategories, CategoriesActions.getCategories);

        const result = fromSelectors.isCategoriesLoaded .projector(state);
        expect(result).toBeFalse()
    });
})