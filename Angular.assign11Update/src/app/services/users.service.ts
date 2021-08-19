import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:9000/server2';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
   getUsers():Observable<any> {
    return this.http.get(baseUrl);
    
}
getUser(id:any):Observable<any> {
  return this.http.get(`${baseUrl}/${id}`);
  
}

 deleteUser(id:any):Observable<any> {
  return this.http.delete(`${baseUrl}/${id}`);
   
}
 editUser(id:any, object: any):Observable<any> {
    //converting the datetime field value in utc 8601 type from datetime-local to store in db table.
  const date=new Date(object.datetime);
   const user={
    first__name: object.first__name,
    middle__name:object.middle__name,
    last__name: object.last__name,
    email:object.email,
    phone_number: object.phone_number,
    role: object.role,
    address: object.address,
    datetime:date.toISOString(),
    customer_Name:object.customer_Name

   }
  return this.http.put(`${baseUrl}/${id}`, user);

    
}
 addUser(object:any):Observable<any> {
   //converting the datetime field value in utc 8601 type from datetime-local to store in db table.
  const date=new Date(object.datetime);
  const user={
    first__name: object.first__name,
    middle__name:object.middle__name,
    last__name: object.last__name,
    email:object.email,
    phone_number: object.phone_number,
    role: object.role,
    address: object.address,
    datetime:date.toISOString(),
    customer_Name:object.customer_Name

   }

  return this.http.post(baseUrl, user);
}
}
  
