import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./../../checkout.component.css', './billing-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BillingInfoComponent {

  constructor() { }

}
