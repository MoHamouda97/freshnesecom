import { select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectAllCategories } from 'src/app/store/category/categories.selectors';
import { countCart } from 'src/app/store/cart/cart.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  categories$: Observable<any>;
  cart$: Observable<any>;

  constructor(private stroe: Store<AppState>) {
    this.categories$ = this.stroe.pipe(select(selectAllCategories));
    this.cart$ = this.stroe.pipe(select(countCart));
  }
}
