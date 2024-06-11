import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { SingleUserReponse, User } from '../interfaces/user-request.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  private http = inject(HttpClient);
  private baseUrl = 'https://reqres.in/api/users';


  getuserById( id: number): Observable<User>{

      return this.http.get<SingleUserReponse>(`${this.baseUrl}/${id}`)
        .pipe(
          map( response => response.data),
          tap( console.log),
        )

  }


}
