import { filter, finalize, first, map, tap } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from '../../reducers';
import { getCategories } from './categories.actions';
import { isCategoriesLoaded } from './categories.selectors';

@Injectable()

export class CategoriesResolver implements Resolve<any> {
    loading = false;
    
    constructor(private stroe: Store<AppState>) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any>{
        return this.stroe
            .pipe(
                select(isCategoriesLoaded),
                tap((categoriesLoaded) => {
                    if (!this.loading && !categoriesLoaded) {
                        this.stroe.dispatch(getCategories());
                    }
                }),
                first(),
                finalize(() => this.loading = false)
            )
    }
}