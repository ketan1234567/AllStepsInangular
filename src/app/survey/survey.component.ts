import { Component } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent {
  selectedOption: string | undefined;
  submitted: boolean = false;

  submitSurvey() {
    // You can perform actions with the selected option here
    console.log('Selected option:', this.selectedOption);

    // For simplicity, just mark the survey as submitted
    this.submitted = true;
  }

}
