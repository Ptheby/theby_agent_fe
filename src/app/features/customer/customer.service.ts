import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { Customer } from '../../shared/models/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = environment.apiUrl;

  onAddCustomer() {}
  customers = [];
  constructor(private http: HttpClient) {}

  // add a customer with an observable returning a post method to my environmental api URL plus the path for the create action including address
  addCustomer(customerData: any): Observable<any> {
    return this.http.post<any>(
      this.apiUrl + '/customers/create_with_address',
      customerData
    );

    //same thing as the add but getting a getting a customer with a get method based on id
  }
  getCustomerById(id: any): Observable<any> {
    const url = `${this.apiUrl}/customers/${id}`;
    return this.http.get<any>(url);
  }
  getAllCustomers(): Observable<any> {
    return this.http.get<any>(
      this.apiUrl + '/customers')

  }

}
