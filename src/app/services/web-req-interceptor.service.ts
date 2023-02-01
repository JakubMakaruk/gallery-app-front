import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, empty, Observable, switchAll, switchMap, tap, throwError} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class WebReqInterceptorService implements HttpInterceptor{

  refreshAccessTokenField!: boolean;

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    request = this.addAuthHeader(request);
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);

        if (error.status === 401) {
          // 401 - unauthorized
          return this.refreshAccessToken()
            .pipe(
              switchMap(() => {
                request = this.addAuthHeader(request);
                return next.handle(request);
              }),
              catchError((err: any) => {
                console.log(err);
                this.authService.logout();
                return empty();
              })
            )
        }
        return throwError(error);
      })
    )
  }

  refreshAccessToken() {
    this.refreshAccessTokenField = true;
    return this.authService.getNewAccessToken().pipe(
      tap(() => {
        this.refreshAccessTokenField = false;
        console.log('Access Token refreshed.')
      })
    )
  }

  addAuthHeader(req: HttpRequest<any>) {
    const token = this.authService.getAccessToken();

    if (token) {
      return req.clone({
        setHeaders: {
          'x-access-token': token
        }
      })
    }
    return req;
  }
}
