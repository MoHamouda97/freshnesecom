import { Product } from './../../model/product';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { productAdded } from '../../../../store/cart/cart.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() product: Product;
  
  constructor(private stroe: Store<AppState>) {
    this.product = new Product()
  }

  addToCart() {
    const product: any = new Product(this.product)
    this.stroe.dispatch(productAdded({product}))
  }

}
