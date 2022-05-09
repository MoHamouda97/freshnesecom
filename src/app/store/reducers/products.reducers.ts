import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on, State } from "@ngrx/store";
import { Product } from "../../modules/home/model/product";
import { ProductsActions } from "../products/products.action-types";

export interface ProductsState extends EntityState<any> {
    ProductsLoaded: boolean
}

export const adapter = createEntityAdapter<Product>({
    selectId: products => products.id
})

export const initProductsState = adapter.getInitialState({
    ProductsLoaded: false
})

export const ProductsReducer = createReducer(
    initProductsState,
    on(ProductsActions.productsLoaded, (state, action) => adapter.addMany(action.products, {...state, ProductsLoaded: true})),
)

export const {selectAll} = adapter.getSelectors();