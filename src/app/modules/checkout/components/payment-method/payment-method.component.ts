import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./../../checkout.component.css', './payment-method.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentMethodComponent {

  constructor() { }

}
