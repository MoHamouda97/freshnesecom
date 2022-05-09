import { filter, finalize, first, map, tap } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from '../../../reducers';
import { getProducts } from '../../../store/products/products.actions';
import { isProductsLoaded } from '../../../store/products/products.selectors';

@Injectable()

export class ProductsResolver implements Resolve<any> {
    loading = false;
    
    constructor(private stroe: Store<AppState>) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any>{
        return this.stroe
            .pipe(
                select(isProductsLoaded),
                tap((productsLoaded) => {
                    if (!this.loading && !productsLoaded) {
                        this.stroe.dispatch(getProducts());
                    }
                }),
                first(),
                finalize(() => this.loading = false)
            )
    }
}