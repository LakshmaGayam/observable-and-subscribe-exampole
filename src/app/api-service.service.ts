import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
import {Observable} from 'rxjs'
import {post} from './classpost'
 @Injectable()
export class ApiServiceService {

  constructor(private http:HttpClient) { }
getPost():Observable<any>
{
  return this.http.get("https://jsonplaceholder.typicode.com/posts")
}
}