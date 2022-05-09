import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { Product } from "../../modules/home/model/product";

export const productAdded = createAction(
    "[Add to Cart] Product Added",
    props<{product: Product}>()
);

export const changeQantity = createAction(
    "[Checkout] Product Quantity Changed",
    props<{update: Update<Product>}>()
);

export const removeItem = createAction(
    "[Checkout] Product Removed",
    props<{id: number}>()
);