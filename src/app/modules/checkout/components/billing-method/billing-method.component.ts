import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing-method',
  templateUrl: './billing-method.component.html',
  styleUrls: ['./../../checkout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BillingMethodComponent {

  constructor() { }

}
