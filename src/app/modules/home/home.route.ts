import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductsResolver } from './resolvers/products.resolver';

export const HomeRoutes: Routes = [
  {
    path: ':type',
    component: HomeComponent,    
    children: [],
    resolve: {
      products: ProductsResolver
    }
  }
];
