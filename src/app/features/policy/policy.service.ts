import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Policy } from '../../shared/models/policy';


@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  addPolicy(policyData: any): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/policies`,
      policyData
    );
  }
  updatePolicy(policyId: any, policyData: any): Observable<Policy> {
    return this.http.put<Policy>(
      `${this.apiUrl}/policys/${policyId}`,
      policyData
    ).pipe(
      catchError((error) => {
        console.error('Error updating policy:', error);
        return throwError(error);
      })
    );
  }


  getPolicyById(id: any): Observable<Policy> {
    return this.http.get<Policy>(`${this.apiUrl}/policies/${id}`);
  }

  getAllpolicies(): Observable<Policy[]> {
    return this.http.get<any>(`${this.apiUrl}/policies`).pipe(
      map((response: any) => {
        const policies: Policy[] = response.policies;
        return policies.reverse(); // Reverse the array before returning
      }),
      catchError((error) => {
        console.error('Error fetching policies:', error);
        return throwError(error);
      })
    );
  }
  deletePolicy(policyId: any): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/policies/${policyId}`).pipe(
      catchError((error) => {
        console.error('Error deleting policy:', error);
        return throwError(error);
      })
    );
  }
}





