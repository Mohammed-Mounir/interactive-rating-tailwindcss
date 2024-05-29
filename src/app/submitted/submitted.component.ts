import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-submitted',
  standalone: true,
  imports: [],
  templateUrl: './submitted.component.html',
  styleUrl: './submitted.component.css',
})
export class SubmittedComponent {
  @Input() numOfRates: null | number = 0;
  @Input() selectedRate: null | number = 0;
}
