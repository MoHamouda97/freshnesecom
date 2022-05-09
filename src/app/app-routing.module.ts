import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutRoutes } from './modules/layout/layout.routs';


@NgModule({
  imports: [RouterModule.forRoot(LayoutRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
