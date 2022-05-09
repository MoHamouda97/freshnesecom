import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { MidHeaderComponent } from 'src/app/shared/components/mid-header/mid-header.component';
import { NavigationComponent } from 'src/app/shared/components/navigation/navigation.component';
import { TopHeaderComponent } from 'src/app/shared/components/top-header/top-header.component';
import { LayoutComponent } from './layout.component';
import { CategoriesResolver } from '../../store/category/categories.resolver';
import { CategoriesEffect } from '../../store/category/categories.effect';
import { StoreModule } from '@ngrx/store';
import { categoriesReducer } from '../../store/reducers/categories.reducers';
import { LayoutRoutes } from './layout.routs';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LayoutComponent,
    TopHeaderComponent,
    MidHeaderComponent,
    NavigationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    FormsModule,
    EffectsModule.forFeature([
      CategoriesEffect
    ]),
    StoreModule.forFeature('Categories', categoriesReducer),
  ],
  providers: [
    CategoriesResolver
  ]
})
export class LayoutModule { }
