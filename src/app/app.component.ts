import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RatingComponent } from './rating/rating.component';
import { SubmittedComponent } from './submitted/submitted.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RatingComponent, SubmittedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  ratings = [1, 2, 3, 4, 5];
  selectedRate = null;
  isSubmitted = false;
  addSelectedRate(rate: any) {
    this.selectedRate = rate;
  }

  onSubmitRate() {
    this.isSubmitted = true;
  }
}
