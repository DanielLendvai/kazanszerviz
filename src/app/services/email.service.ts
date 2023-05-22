import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private contactEmailApiUrl = 'https://kazanszerviz.net/sendMail.php';

  constructor(private http: HttpClient) {}

  sendContactEmail(email: string, message: string): Observable<any> {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('message', message);

    return this.http.post<any>(this.contactEmailApiUrl, formData);
  }
}
