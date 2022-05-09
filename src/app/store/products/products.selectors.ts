import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromProductss from "../reducers/products.reducers";
import { ProductsState } from "../reducers/products.reducers";

export const selectProductsState = createFeatureSelector<ProductsState>('Products');

export const selectAllProducts = createSelector(
    selectProductsState,
    fromProductss.selectAll
)

export const filterProduct = (category: string) => createSelector(
    selectAllProducts,
    state => state.filter(p => p.category == category)
)

export const isProductsLoaded = createSelector(
    selectProductsState,
    state => state.ProductsLoaded
)