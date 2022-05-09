import { Product } from './../../modules/home/model/product';
import * as fromSelectors from './cart.selectors';
import * as fromReducer from './../reducers/cart.reducers';
import { productAdded } from './cart.actions';

describe('Cart Selector', () => {
    it('sholud select all products', () => {
        const { initCartState } = fromReducer;
        const product = new Product()
        const action = productAdded({product: product})
        const state = fromReducer.CartReducer(initCartState, action);

        const result = fromSelectors.selectCart.projector(state);
        expect(result.length).toEqual(1)
    });

    it('sholud select count products', () => {
        const initState: Product[] = [
            new Product(),
            new Product()
        ];

        const result = fromSelectors.countCart.projector(initState);
        expect(result).toEqual(2)
    });

    it('sholud select get products total', () => {
        const initState: Product[] = [
            new Product(),
            new Product()
        ];

        const result: any = fromSelectors.totalCart.projector(initState);
        expect(result).toEqual('0.00')
    });
})