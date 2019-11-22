import { Component, OnInit } from '@angular/core';
import {DataFetchService} from "./../data-fetch.service";
import {IuserModel} from "./../../model/userModel";


@Component({
  selector: 'app-http-testing',
  templateUrl: './http-testing.component.html',
  styleUrls: ['./http-testing.component.css'],
  
})
export class HttpTestingComponent implements OnInit {

  constructor(private _fetchData:DataFetchService) { }

  public fetchedData=[];

  ngOnInit() {
    this._fetchData.getData().subscribe((user)=>{
      this.fetchedData=user;
   
    })
  }

}
