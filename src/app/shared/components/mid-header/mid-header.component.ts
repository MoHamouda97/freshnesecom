import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mid-header',
  templateUrl: './mid-header.component.html',
  styleUrls: ['./mid-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MidHeaderComponent {
  @Input() categories: string[];
  @Input() cart: number;
  query: string

  constructor(private router: Router) { 
    this.categories = [];
    this.cart = 0;
    this.query = ''
  }

  filter(category: string) {
    this.router.navigate([`/home/${category}`])
  }

  search(search: string) {
    if (search) {
      this.router.navigate(['home/search'], { queryParams: { q: search } })
    } else this.router.navigate([`/home/products`])
  }

}
