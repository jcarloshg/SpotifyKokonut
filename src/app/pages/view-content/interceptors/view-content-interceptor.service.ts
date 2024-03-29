import { HttpContextToken, HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { RequestAccessTokenService } from '../../../business_domain_services/authenticate/request-access-token.service';
import { ListenNetworkStatusService } from '../../../shared/services/listen-network-status.service';

export const DISABLE_GLOBAL_EXCEPTION_HANDLING = new HttpContextToken<boolean>(() => false);

@Injectable({
  providedIn: 'root'
})
export class ViewContentInterceptorService implements HttpInterceptor {

  constructor(
    private requestAccessTokenService: RequestAccessTokenService,
    listenNetworkStatusService: ListenNetworkStatusService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const ignoreInterceptor = this.ignoreErrorHandling(req);
    if (ignoreInterceptor == true) return next.handle(req);

    const accessToken = this.requestAccessTokenService.getAccessToken();

    const headers = new HttpHeaders({
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/x-www-form-urlencoded",
    });

    const requestCloned = req.clone({
      headers,
    });

    return next.handle(requestCloned).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log({ err });
        return throwError(err);
      })
    );;
  }

  private ignoreErrorHandling(request: HttpRequest<any>) {
    return request.context.get(DISABLE_GLOBAL_EXCEPTION_HANDLING);
  }

}
