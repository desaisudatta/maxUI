import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http"
import { Storage } from "@ionic/storage";
import { Observable } from 'rxjs';
import { catchError,mergeMap } from "rxjs/operators";
// import { _throw } from 'rxjs/observable/throw'

@Injectable({
  providedIn: 'root'
})
export class InterceptorServiceService  {

  constructor(private storage:Storage) { }
  // intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
  //   let promise= this.storage.get('my_token');
     
  //   // return  Observable.fromPromise(promise)
  //   // .mergeMap(token =>{

  //   // })
  // }
}
