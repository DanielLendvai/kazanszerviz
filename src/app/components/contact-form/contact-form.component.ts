import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  public sendEmail(e: Event) {
    emailjs.sendForm('service_bqd425f', 'template_rtb20ho', e.target as HTMLFormElement, 'C5ccnPSq4yrtL4zg2')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        window.alert("Üzenet elküldve.")
      }, (error) => {
        console.log(error.text);
      })
      .finally(()=> {
        window.location.reload();
      });
  }
}
