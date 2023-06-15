import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private contactEmailApiUrl = "https://kazanszerviz.net/sendMail.php";

  constructor(private http: HttpClient) {}

  sendContactEmail(
    name: string,
    email: string,
    message: string,
    location: string,
    telephone: number | any,
    checkboxes: string[] 

  ): Observable<any> {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    formData.append('location', location);
    formData.append('telephone', telephone);
    checkboxes.forEach(value => {
      formData.append('checkboxes[]', value);
    });

    return this.http.post<any>(this.contactEmailApiUrl, formData);
  }
}
