import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl; // your backend URL

  constructor(private http: HttpClient) {}

  // Example: check server status
  status(): Observable<any> {
    return this.http.get(`${this.apiUrl}/status`);
  }

  // Example: get list of 3D art pieces
  getArtList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/art`);
  }

  // Example: upload new art
  uploadArt(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/art`, data);
  }

  // Example: get details for a specific art item
  getArtById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/art/${id}`);
  }
}
