import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Thought } from './thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceThoughtService {
  private readonly API = 'http://localhost:3000/thoughts';
  constructor(private http: HttpClient) {}
  list(): Observable<Thought[]> {
    return this.http.get<Thought[]>(this.API);
  }
  createTh(thought: Thought): Observable<Thought[]> {
    return this.http.post<Thought[]>(this.API, thought);
  }
  deleteThought(thought: Thought) {}
}
