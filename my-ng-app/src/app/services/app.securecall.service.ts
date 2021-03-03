import { AuthUser, ResponseMessage, ProductResponse } from './../models/app.security.models';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterUser } from '../models/app.security.models';

@Injectable({providedIn: 'root'})
export class SecureCallService {

  constructor(private httpClient: HttpClient) { }

  registerUser(user:RegisterUser):Observable<ResponseMessage> {
      let resp:Observable<ResponseMessage>;
      resp = this.httpClient.post<ResponseMessage>("https://tokenbasedsecureapi.azurewebsites.net/api/AuthService/RegisterNewUser",
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

  fetchData(token:string):Observable<ProductResponse[]> {
    let resp:Observable<ProductResponse[]>;
     resp = this.httpClient.get<ProductResponse[]>(
       "https://tokenbasedsecureapi.azurewebsites.net/api/ProductService",
       {
         headers:{
           "AUTHORIZATION":`Bearer ${token}`
         }
       }
     );
    return resp;
  }

}
