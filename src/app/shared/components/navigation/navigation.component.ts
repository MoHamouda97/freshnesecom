import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {
  categories: string[];
  
  constructor() { 
    this.categories = [
      "Bakery",
      "Fruit and vegetables",
      "Meat and fish",
      "Drinks",
      "Kitchen",
      "Special nutrition",
      "Baby",
      "Pharmacy"
    ];
  }

  ngOnInit(): void {
  }

}
