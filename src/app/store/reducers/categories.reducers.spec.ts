import { CategoriesActions } from '../category/categories.action-types';
import * as fromReducer from './categories.reducers';

describe('Init State', () => {
    it('should return the default state', () => {
      const { initCategories } = fromReducer;
      const state = fromReducer.categoriesReducer(initCategories, CategoriesActions.getCategories);
      expect(state).toBe(initCategories);
    });
});    