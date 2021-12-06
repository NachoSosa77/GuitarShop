import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { UserLogin,UserRegistro} from "../interfaces/Users"

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  save(data:UserRegistro){
    return this.http.post(environment.endPointApi+"users",data).toPromise();
  }
  login(data:UserLogin){
    return this.http.post(environment.endPointApi+"users/login",data).toPromise();
  }
}
