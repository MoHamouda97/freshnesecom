import { createAction, props } from "@ngrx/store";
import { Product } from "../../modules/home/model/product";

export const getProducts = createAction(
    "[Home Resolver] Get Products"
);

export const productsLoaded = createAction(
    "[Load Products Effect] Products Loaded",
    props<{products: Product[]}>()
);