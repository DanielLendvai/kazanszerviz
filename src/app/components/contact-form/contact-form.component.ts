import { Component } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  email!: string;
  message!: string;

  constructor(private emailService: EmailService) {}

  submitForm(): void {
    // Send the email
    this.emailService.sendContactEmail(this.email, this.message).subscribe(
      response => {
        console.log(response); // Handle the response from the server
        // Optionally, you can display a success message to the user or navigate to a success page
      },
      error => {
        console.error(error); // Handle any errors that occurred during the request
        // Optionally, you can display an error message to the user
      }
    );
  }
}
