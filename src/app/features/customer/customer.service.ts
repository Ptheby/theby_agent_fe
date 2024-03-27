import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
apiUrl =environment.apiUrl;



  onAddCustomer(){};
  customers=[];
  constructor(private http: HttpClient) { }

  addCustomer(customerData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, customerData);




}}
