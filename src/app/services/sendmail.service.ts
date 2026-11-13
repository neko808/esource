import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SendmailService {

  
  REST_API: string ='https://backend-dot-gmal-api-313723.uc.r.appspot.com';
  
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  
    constructor(private httpClient: HttpClient) {   }
      
    sendtoemail(dato) :Observable<any> {
      
  
  
      let API=`${this.REST_API}/sendEmail/`;

      return this.httpClient.post(API,dato,{headers:this.httpHeaders}) .pipe(
        catchError(this.handleError)
      )
    }
      // Error si usamos el rxjs
      handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // Handle client error
          errorMessage = error.error.message;
        } else {
          // Handle server error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
      }
}
