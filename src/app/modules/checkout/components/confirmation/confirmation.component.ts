import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./../../checkout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationComponent  {

  constructor() { }

}
