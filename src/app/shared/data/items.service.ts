import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from './models/item';
//import 'rxjs/Rx/map';

import { ITEMS } from '../data/mock-items';

@Injectable()
export class ItemsService {

  private apiUrl = 'your-url.your-api.your-data';
  public apiItems: any[];

  private age: number;
  private found: boolean;

  public mockItems = ITEMS; //temporary data to use for testing before using an online api

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<any[]>(this.apiUrl);
  }
  getItems(){
    /*return this.getData().subscribe(
      (data) => {this.apiItems = data;
    },
      (err: any) => console.log(err)    
    );*/
    return this.mockItems = ITEMS;
  }


}
