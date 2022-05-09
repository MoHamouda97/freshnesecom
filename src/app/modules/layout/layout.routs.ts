import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { CategoriesResolver } from '../../store/category/categories.resolver';

export const LayoutRoutes: Routes = [
  {
    path: 'home',
    component: LayoutComponent,    
    loadChildren: () => import('./../home/home.module').then(m => m.HomeModule),
    resolve: {
      categories: CategoriesResolver
    }
  },
  {
    path: 'checkout',
    component: LayoutComponent,
    loadChildren: () => import('./../checkout/checkout.module').then(m => m.CheckoutModule)
  },
  {
    path: '',
    redirectTo: '/home/products',
    pathMatch: 'full'
  }
];
