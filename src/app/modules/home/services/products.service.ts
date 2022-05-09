import { catchError, map } from 'rxjs/operators';
import { Product } from './../model/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(limit: number, skip: number): Observable<any> {
    return this.http.get<Array<Product>>(`${environment.api}?limit=${limit}&skip=${skip}`)
      .pipe(
        map((next: any) => next.products),
        catchError(() => of([]))
      )
  }

  search(query: string) {
    return this.http.get<Array<Product>>(`${environment.api}${query}`)
      .pipe(
        map((next: any) => next.products),
        catchError(() => of([]))
      )
  }
  
}
