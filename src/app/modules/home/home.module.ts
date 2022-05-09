import { CartReducer } from '../../store/reducers/cart.reducers';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeRoutes } from './home.route';
import { HomeComponent } from './home.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductsReducer } from '../../store/reducers/products.reducers';
import { ProductsEffect } from '../../store/products/products.effect';
import { ProductsResolver } from './resolvers/products.resolver';
import { ProductComponent } from './components/product/product.component';
import { ScrollDirective } from 'src/app/shared/directives/scroll.directive';



@NgModule({
  declarations: [
    HomeComponent,
    CategoriesComponent,
    ProductComponent,
    ScrollDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    EffectsModule.forFeature([
        ProductsEffect
    ]),
    StoreModule.forFeature('Products', ProductsReducer),
    StoreModule.forFeature('Cart', CartReducer),
  ],
  providers: [
    ProductsResolver 
  ]
})
export class HomeModule { }
