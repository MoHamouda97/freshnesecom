import { Product } from './model/product';
import { ProductsService } from './services/products.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { Paging } from 'src/app/shared/classes/paging';
import { selectAllCategories } from '../../store/category/categories.selectors';
import { selectAllProducts } from '../../store/products/products.selectors';
import { getProducts } from '../../store/products/products.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  categories$: Observable<any>;
  products: Product[];
  paging: Paging;
  queryString: string;
  query: string;
  category: string;
  isByCategory: boolean;
  isByQuery: boolean;
  isFromStore: boolean;
  subscriptions: Subscription[]

  constructor(
    private stroe: Store<AppState>, 
    private product: ProductsService,
    private router: ActivatedRoute) {
    this.categories$ = this.stroe.pipe(select(selectAllCategories));
    this.products = [];
    this.paging = Paging.getInstance();
    this.queryString = '';
    this.category = '';
    this.query = '';
    this.isByCategory = false;
    this.isByQuery = false;
    this.isFromStore = false;
    this.subscriptions = []
  }

  ngOnInit(): void {
    this.routerSubscription();
    this.querySubscription();
  }

  //#region // SUBSCRIPTION
  routerSubscription() {
    const sub = this.router.params.subscribe(
      (param: any) => {
        if (param.type != 'products' && param.type != 'search') {
          this.category = param.type
          this.isByCategory = true;
          this.isByQuery = false;
          this.isFromStore = false;
          this.resetValues();   
          this.searchByCategory(this.category)
        }

        if (param.type == 'products') {
          this.isByCategory = false;
          this.isByQuery = false;
          this.isFromStore = true;
          this.resetValues(); 
          this.stroe.pipe(select(selectAllProducts)).subscribe((products) => this.products = products)
        }
      }
    )

    this.subscriptions.push(sub)
  }

  querySubscription() {
    const sub = this.router.queryParams.subscribe(
      (query: any) => {
        if (query?.q) {
          this.query = query?.q
          this.isByCategory = false;
          this.isFromStore = false;
          this.isByQuery = true;
          this.resetValues();          
          this.searchByQuery(this.query)
        }
      }
    )

    this.subscriptions.push(sub)
  }
  //#endregion

  //#region // RESET VALUES
  resetValues() {
    this.products = [];
    this.paging.skip = 0;
  }
  //#endregion

  //#region // FILTER
  searchByCategory(category: any) {
    this.queryString = `category/${category}?limit=${this.paging.limit}&skip=${this.paging.skip}`; 
    this.search();
  }

  searchByQuery(query: any) {
    this.queryString = `search?q=${query}&limit=${this.paging.limit}&skip=${this.paging.skip}`
    this.search();
  }
  //#endregion

  //#region // CRUD
  async search() {
    const products: Product[] = await this.product.search(this.queryString).toPromise();
    this.products = [
      ...this.products,
      ...products
    ]
  }
  //#endregion

  //#region // LOAD MORE
  loadMore() {
    this.paging.skip += this.paging.limit;
    if (this.isByCategory) this.searchByCategory(this.category);
    if (this.isByQuery) this.searchByQuery(this.query);
    if (this.isFromStore) this.stroe.dispatch(getProducts());
  }
  //#endregion

  ngOnDestroy(): void {
    if (this.subscriptions.length) {
      this.subscriptions.forEach(sub => sub.unsubscribe());
    }
  }

}
