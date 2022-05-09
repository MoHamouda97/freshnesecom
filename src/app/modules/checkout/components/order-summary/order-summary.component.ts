import { Product } from './../../../home/model/product';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { selectCart, totalCart } from 'src/app/store/cart/cart.selectors';
import { changeQantity, removeItem } from 'src/app/store/cart/cart.actions';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./../../checkout.component.css', './order-summary.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderSummaryComponent implements OnInit {
  products$: Observable<any>;
  total$: Observable<any>;
  isLoaded: boolean;

  constructor(private stroe: Store<AppState>) { 
    this.isLoaded = false;
    this.products$ = this.stroe.pipe(select(selectCart));
    this.total$ = this.stroe.pipe(select(totalCart));
  }

  ngOnInit(): void {
    this.products$.subscribe((pro: any[]) => (pro.length) ? this.isLoaded = true : false)
  }

  updateQuantity(product: Product, quantity: any) {
    const update: Update<Product> = {
      id: product.id,
      changes: new Product(product, quantity)
    }

    this.stroe.dispatch(changeQantity({update}))
  }

  removeItem(product: any) {
    this.stroe.dispatch(removeItem(product))
  }

}
