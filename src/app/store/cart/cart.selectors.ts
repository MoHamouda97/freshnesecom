import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromCart from "../reducers/cart.reducers";
import { CartState } from "../reducers/cart.reducers";

export const selectCartState = createFeatureSelector<CartState>('Cart');

export const selectCart = createSelector(
    selectCartState,
    fromCart.selectAll
)

export const countCart = createSelector(
    selectCart,
    state => state.length
)

export const totalCart = createSelector(
    selectCart,
    state => state.map(product => (product.price * product.quantity) -  ((product.price * product.discountPercentage) / 100)).reduce((a, b) => a + b, 0).toFixed(2)
)