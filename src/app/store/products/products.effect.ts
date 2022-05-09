import { Paging } from '../../shared/classes/paging';
import { ProductsService } from '../../modules/home/services/products.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs';
import { ProductsActions } from './products.action-types';
import { productsLoaded } from './products.actions';

@Injectable()

export class ProductsEffect {

    loadProducts$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(ProductsActions.getProducts),
                concatMap(action =>  {
                    const paging: Paging = Paging.getInstance();
                    return this.service.getProducts(paging.limit, paging.skip)
                }),
                map(products => productsLoaded({products}))
            )
    )

    constructor(
        private actions$: Actions, 
        private service: ProductsService) {}

}