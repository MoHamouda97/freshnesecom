import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { CheckoutRoutes } from './checkout.route';
import { BillingInfoComponent } from './components/billing-info/billing-info.component';
import { BillingMethodComponent } from './components/billing-method/billing-method.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { StoreModule } from '@ngrx/store';
import { CartReducer } from '../../store/reducers/cart.reducers';



@NgModule({
  declarations: [
    CheckoutComponent,
    BillingInfoComponent,
    BillingMethodComponent,
    PaymentMethodComponent,
    ConfirmationComponent,
    OrderSummaryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CheckoutRoutes),
    StoreModule.forFeature('Cart', CartReducer),
  ],
  providers: []
})
export class CheckoutModule { }
