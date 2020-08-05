/**
 * Every request before it is send to HttpClient
 * I want to add the header: Authorization: Bearer token
 *
 *  ---Jwt-----Content-------Cookies-------------------> httpclient
 *  <--------------------------401----------Cache-------
 */

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`)
    });
    return next.handle(newReq);
  }

}

@Injectable()
export class HelloInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newReq = req.clone({
      headers: req.headers.set('hello', `world`)
    });
    return next.handle(newReq);
  }
}

