import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { ProductInfo } from "./../models/app.product.model";

@Injectable(
   {providedIn: 'root'}
  )
export class HttpService {

  private url:string;

  // this injection will be resolved using the
  // HttpClientModule from @angular/common/http
  // this must be imported in import:[] array of NgModule
  constructor(private httpClient: HttpClient) {
    this.url = "https://apiapptrainingnewapp.azurewebsites.net/api/Products";
   }


  getData():Observable<ProductInfo[]> {
    let response:Observable<ProductInfo[]>;
    response = this.httpClient.get<ProductInfo[]>(this.url);
    return response;
  }

  getDataById(id:number):Observable<ProductInfo> {
    let response:Observable<ProductInfo>;
    response = this.httpClient.get<ProductInfo>(`${this.url}/${id}`);
    return response;
  }

  postData(prd:ProductInfo):Observable<ProductInfo> {
    let response:Observable<ProductInfo>;
    response = this.httpClient.post<ProductInfo>(this.url,prd, {
        headers: {
          "Content-Type":"application/json"
        }
    });
    return response;
  }

  putData(id:number,prd:ProductInfo):Observable<ProductInfo> {
    let response:Observable<ProductInfo>;
    response = this.httpClient.put<ProductInfo>(`${this.url}/${id}`,prd, {
        headers: {
          "Content-Type":"application/json"
        }
    });
    return response;
  }

  deleteData(id:number):Observable<ProductInfo> {
    let response:Observable<ProductInfo>;
    response = this.httpClient.delete<ProductInfo>(`${this.url}/${id}`);
    return response;
  }

}
