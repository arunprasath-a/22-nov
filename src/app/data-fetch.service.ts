import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IuserModel} from "./../model/userModel";
import {Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class DataFetchService {

  constructor(private http:HttpClient) { }
  
  ROOT_URL="./../assets/user.json";

  getData():Observable<IuserModel[]>{
   return this.http.get<IuserModel[]>(this.ROOT_URL);
  }

  
}
