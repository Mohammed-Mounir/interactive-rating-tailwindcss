import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css',
})
export class RatingComponent {
  @Input() ratings: number[] = [];
  @Output() selectedRateEvent = new EventEmitter<null | number>();
  @Input() selectedRate: null | number = null;
  @Output() submittedEvent = new EventEmitter<boolean>();
  rated = false;

  onSelectRate(rate: number) {
    this.selectedRateEvent.emit(rate);
  }

  onSubmit() {
    this.submittedEvent.emit(true);
  }
}
