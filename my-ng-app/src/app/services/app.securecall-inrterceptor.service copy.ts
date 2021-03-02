import { AuthUser, ResponseMessage, ProductResponse } from './../models/app.security.models';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterUser } from '../models/app.security.models';

@Injectable({providedIn: 'root'})
export class SecureInterceptorCallService {

  constructor(private httpClient: HttpClient) { }

  registerUser(user:RegisterUser):Observable<any> {
      let resp:Observable<any>;
      resp = this.httpClient.post<any>("https://tokenbasedsecureapi.azurewebsites.net/api/AuthService/RegisterNewUser",
         user, {
           headers: {
             "Content-Type":"application/json"
           }
         })
      return resp;
  }


  authUser(user:AuthUser):Observable<ResponseMessage> {
    let resp:Observable<any>;
    resp = this.httpClient.post<any>("https://tokenbasedsecureapi.azurewebsites.net/api/AuthService/Login",
       user, {
         headers: {
           "Content-Type":"application/json"
         }
       })
    return resp;
  }

  fetchData():Observable<ProductResponse[]> {
    let resp:Observable<ProductResponse[]>;
     resp = this.httpClient.get<ProductResponse[]>(
       "https://tokenbasedsecureapi.azurewebsites.net/api/ProductService"
     );
    return resp;
  }

}
