import { productsLoaded } from '../products/products.actions';
import { Product } from './../../modules/home/model/product';
import * as fromReducer from './products.reducers';

describe('Product State', () => {
    it('should return the default state', () => {
        const { initProductsState } = fromReducer;
        const products: Product[] = [
            new Product(),
            new Product(),
        ];
        const action = productsLoaded({products: products})
        const state = fromReducer.ProductsReducer(initProductsState, action);
        const newState: Product[] = products
        expect(state.entities[0]).toEqual(newState[0]);
      });
}); 