import { Injectable } from '@angular/core';
import { IContact } from './contact';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getContactById(id: number): Observable<IContact>{
    return this.http.get<IContact>(apiUrl.apiUrl+`contact/${id}`);
  }

  putContact(contact: any){
    return this.http.put<IContact>(apiUrl.apiUrl+`contact/${contact.id}`, contact);
  }

  postContact(contact: any){
    return this.http.post<IContact>(apiUrl.apiUrl+"contact", contact);
  }

  deleteContact(id: number){
    return this.http.delete(apiUrl.apiUrl+`contact/${id}`);
  }

  getAllContactsPaginated(): Observable<IContact>{
    return this.http.get<IContact>(apiUrl.apiUrl+"contact");
  }
}
