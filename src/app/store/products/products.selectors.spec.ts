import * as fromSelectors from './products.selectors';
import * as fromReducer from './../reducers/products.reducers';
import { productsLoaded } from './products.actions';
import { Product } from 'src/app/modules/home/model/product';

describe('Products Selector', () => {
    it('sholud select all products', () => {
        const { initProductsState } = fromReducer;
        const products: Product[] = [
            new Product(),
            new Product()
        ];
        const action = productsLoaded({products: products})
        const state = fromReducer.ProductsReducer(initProductsState, action);

        const result = fromSelectors.selectAllProducts.projector(state);
        expect(result.length).toBeGreaterThanOrEqual(1)
    });

    it('sholud products not loaded', () => {
        const { initProductsState } = fromReducer;
        const products: Product[] = [
            new Product(),
            new Product()
        ];
        const action = productsLoaded({products: products})        
        const state = fromReducer.ProductsReducer(initProductsState, action);

        const result = fromSelectors.isProductsLoaded.projector(state);
        expect(result).toBeTruthy()
    });    

    it('sholud filter products', () => {
        const initState: Product[] = [
            new Product(),
            new Product()
        ];

        const result = fromSelectors.filterProduct('smartphons').projector(initState);
        expect(result.length).toBe(0)
    });    

})