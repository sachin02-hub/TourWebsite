import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('/api/admin/users');
  }

  getTours() {
    return this.http.get('/api/admin/tours');
  }
}
