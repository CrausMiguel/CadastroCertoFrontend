import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPerson } from './person';
import { apiUrl } from '../app.component';
import { IPersonPagiable } from './person-pagiable';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  
  constructor(private http: HttpClient) { }

  getPersonById(id: string): Observable<IPerson>{
    return this.http.get<IPerson>(apiUrl.apiUrl+`person/${id}`);
  }
  
  getAllPersons(): Observable<IPerson[]>{
    return this.http.get<IPerson[]>(apiUrl.apiUrl+"person/all")
  }
  putPerson(person: any){
    return this.http.put<IPerson>(apiUrl.apiUrl+`person/${person.id}`, person);
  }

  postPerson(person: any){
    return this.http.post<IPerson>(apiUrl.apiUrl+"person", person);
  }

  deletePerson(id: number){
    return this.http.delete(apiUrl.apiUrl+`person/${id}`);
  }

  getAllPersonsPaginated(pageNo: number, pageSize:number): Observable<IPersonPagiable>{
    return this.http.get<IPersonPagiable>(apiUrl.apiUrl+`person?pageNo=${pageNo}&pageSize=${pageSize}`);
  }

  
}
