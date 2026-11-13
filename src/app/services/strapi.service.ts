import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StrapiService {

  REST_API: string ='https://strapinew-dot-gmal-api-313723.uc.r.appspot.com/';
  // REST_API: string ='http://localhost:1337/articles';
  
  //https://strapi-dot-gmal-api-313723.uc.r.appspot.com/esource-blog/
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }


  getData():Observable<any>{

    let API=this.REST_API + '?_sort=fecha:DESC';
    return this.httpClient.get(API,{headers:this.httpHeaders}) .pipe(
      map((data:any) => { 
        return data;
      }), catchError( error => {
        return throwError(error);
      })
    )
    
  }



   // getItemFromAllItems( idx:number ): Observable<any> {
   //   return this.httpClient.get(`${this.REST_API}${idx}`);
   // }

  // getItemFromAllItems(idx: number): Observable<any> {
  //  return this.getData().pipe(
  //     // we return the index of the data for this method
  //     map(data => data[idx])
  //  );
  // }

  getDataById(id):Observable<any>{

    let API_ID=this.REST_API+"?id="+id;
    return this.httpClient.get(API_ID,{headers:this.httpHeaders}) .pipe(
      map((data:any) => { 
      
        return data;
      }), catchError( error => {
        return throwError(error);
      })
    )
    
  }



  getDataByCategory(category):Observable<any>{

    let API_ID=this.REST_API+"?category.name="+category+'&_sort=id:DESC';
    return this.httpClient.get(API_ID,{headers:this.httpHeaders}) .pipe(
      map((data:any) => { 

      console.log(data);
        return data;
      }), catchError( error => {
        return throwError(error);
      })
    )
    
  }



 
 
}
