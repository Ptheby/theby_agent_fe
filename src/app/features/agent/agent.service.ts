import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Agent } from './agent';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgentService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAgentById(id: any): Observable<Agent> {
    return this.http.get<Agent>(`${this.apiUrl}/agents/${id}`);
  }

  getAllAgents(): Observable<Agent[]> {
    return this.http.get<Agent[]>(`${this.apiUrl}/agents`).pipe(
      map((response: Agent[]) => {
        console.log('Response:', response); // Log the entire response array
        const agents: Agent[] = response || []; // Use a fallback value if response is undefined
        console.log('Agents:', agents); // Log the agents array
        return agents;
      }),
      catchError((error) => {
        console.error('Error fetching agents:', error);
        return throwError(error);
      })
    );
  }

  updateAgent(agentId: any, agentData: any): Observable<Agent> {
    return this.http
      .put<Agent>(`${this.apiUrl}/agents/${agentId}`, agentData)
      .pipe(
        catchError((error) => {
          console.error('Error updating agent:', error);
          return throwError(error);
        })
      );
  }

  assignAgent(agentId: any, customerId: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/agents/${agentId}/assign_customer/${customerId}`,agentId,customerId)
  }
}
