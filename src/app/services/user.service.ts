import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn :'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get(environment.apiUrl+"api/biometric/user/all?page=0&size=10")
      .pipe(
        retry(3)
      )
  }
  
}
