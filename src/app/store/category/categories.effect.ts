import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { CategoriesActions } from './categories.action-types';
import { categoriesLoaded } from './categories.actions';

@Injectable()

export class CategoriesEffect {

    loadCategories$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(CategoriesActions.getCategories),
                concatMap(action =>  this.service.getCategories()),
                map(categories => categoriesLoaded({categories}))
            )
    )

    constructor(
        private actions$: Actions, 
        private service: CategoriesService) {}

}