import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on, State } from "@ngrx/store";
import { Product } from "../../modules/home/model/product";
import { CartActions } from "../cart/cart.action-types";

export interface CartState extends EntityState<any> {
    cart: Product[]
}

export const adapter = createEntityAdapter<Product>({
    selectId: product => product.id
})

export const initCartState = adapter.getInitialState()

export const CartReducer = createReducer(
    initCartState,
    on(CartActions.productAdded, (state, action) => adapter.addOne(action.product, state)),
    on(CartActions.changeQantity, (state, action) => adapter.updateOne(action.update, state)),
    on(CartActions.removeItem, (state, action) => adapter.removeOne(action.id, state))
)

export const {selectAll} = adapter.getSelectors();