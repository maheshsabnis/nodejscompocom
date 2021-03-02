import { SecureInterceptorCallService } from './app.securecall-inrterceptor.service copy';
import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class HttpInterceptorService implements HttpInterceptor {
  // inject the Angular Services of which calls are intercepted
  constructor(private serv: SecureInterceptorCallService) { }

  intercept(request:HttpRequest<any>, handler:HttpHandler):Observable<HttpEvent<any>> {
    console.log('Inside Interceptor');
    // read the token from the storage
    const token = sessionStorage.getItem("token");
    // read the request header that is to be intercepted
    let requestHeader =  request.headers;
    // check if the token is avaiable in storage is yes then modify the
    // request header by adding the token in it
    if(token) {
      console.log(`Token ${token}`)
      requestHeader = requestHeader.append('AUTHORIZATION', `Bearer ${token}`);
    }
    // create a clone of original request and add the modified request header into it
    const authRequest = request.clone({headers:requestHeader});
    // forward the request with the modified headers value
    return handler.handle(authRequest);
  }

}
