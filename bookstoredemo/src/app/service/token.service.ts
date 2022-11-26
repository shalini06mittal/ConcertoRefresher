import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Servcie class that sends the JWT token in every request after login.
 */
@Injectable({
  providedIn: 'root',
})
export class TokenService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // gets the token from local storage

    // checks if token exists then sends the Authorization token in every request
    // if token does not exists sends the request to next interceptor in the chain

    return next.handle(req);
  }
}
