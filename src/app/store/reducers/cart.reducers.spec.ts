import { Product } from './../../modules/home/model/product';
import { changeQantity, productAdded, removeItem } from '../cart/cart.actions';
import * as fromReducer from './cart.reducers';
import { Update } from '@ngrx/entity';

describe('Cart State', () => {
    it('should add product to cart', () => {
      const { initCartState } = fromReducer;
      const product = new Product()
      const action = productAdded({product: product})
      const state = fromReducer.CartReducer(initCartState, action);
      const newState: Product = product

      expect(state.entities[0]).toEqual(newState);
    });

    it('should remove product from cart', () => {
      const { initCartState } = fromReducer;
      const product: any = new Product();
      const action = productAdded({product: product})
      fromReducer.CartReducer(initCartState, action);      

      const remove = removeItem({id: product});
      const newState = fromReducer.CartReducer(initCartState, remove)

      expect(newState.entities[0]).toBe(undefined)
    });

    it('should update product quantity', () => {
      const { initCartState } = fromReducer;
      const product: any = new Product();
      const action = productAdded({product: product})
      const state = fromReducer.CartReducer(initCartState, action);      

      const updatedProduct: Update<Product> = {
        id: product.id,
        changes: new Product(product, 5)
      }

      const updatedAction = changeQantity({update: updatedProduct});
      const newState = fromReducer.CartReducer(initCartState, updatedAction)

      expect(state.entities[0]).not.toEqual(newState.entities[0])
    });
}); 

export function CartReducer(initCartState: any, action: { product: Product; } & import("@ngrx/store/src/models").TypedAction<"[Add to Cart] Product Added">) {
    throw new Error('Function not implemented.');
}
