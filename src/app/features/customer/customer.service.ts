import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService implements OnInit {
  apiUrl = environment.apiUrl;

  customers: Customer[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.fetchCustomers();
  }
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
    return this.fetchCustomers(); // Call fetchCustomers and return its result
  }

  private fetchCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl + '/customers').pipe(
      map((response: any) => {
        const customers: Customer[] = response.customers; // Extract the customers array from the response
        return customers;
      }),
      catchError((error) => {
        // Handle errors if any
        console.error('Error fetching customers:', error);
        return throwError(error);
      })
    );
  }
}
