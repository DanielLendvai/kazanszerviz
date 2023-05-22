import { Component } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  name!: string;
  email!: string;
  message!: string;
  location!: string;
  telephone!: number;
  selectedCheckboxes: string[] = [];
  constructor(private emailService: EmailService) {}

  isSelected(value: string): boolean {
    return this.selectedCheckboxes.includes(value);
  }

  // Toggle selection of a checkbox value
  toggleCheckbox(value: string): void {
    if (this.isSelected(value)) {
      // Deselect the checkbox
      this.selectedCheckboxes = this.selectedCheckboxes.filter(
        (val) => val !== value
      );
    } else {
      // Select the checkbox
      this.selectedCheckboxes.push(value);
    }
    console.log(this.selectedCheckboxes)
  }

  submitForm(): void {
    // Send the email
    this.emailService
      .sendContactEmail(
        this.name,
        this.email,
        this.message,
        this.location,
        this.telephone,
        this.selectedCheckboxes
      )
      .subscribe(
        (response) => {
          console.log(response); // Handle the response from the server
          // Optionally, you can display a success message to the user or navigate to a success page
        },
        (error) => {
          console.error(error); // Handle any errors that occurred during the request
          // Optionally, you can display an error message to the user
        }
      );
  }
}
