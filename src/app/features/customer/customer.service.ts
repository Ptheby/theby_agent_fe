import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  addCustomer(customerData: any): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/customers/create_with_address`,
      customerData
    );
  }
  updateCustomer(customerId: any, customerData: any): Observable<Customer> {
    return this.http.put<Customer>(
      `${this.apiUrl}/customers/${customerId}`,
      customerData
    ).pipe(
      catchError((error) => {
        console.error('Error updating customer:', error);
        return throwError(error);
      })
    );
  }


  getCustomerById(id: any): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/customers/${id}`);
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<any>(`${this.apiUrl}/customers`).pipe(
      map((response: any) => {
        const customers: Customer[] = response.customers;
        return customers.reverse(); // Reverse the array before returning
      }),
      catchError((error) => {
        console.error('Error fetching customers:', error);
        return throwError(error);
      })
    );
  }
  }

