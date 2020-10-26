import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { SearchPipe } from './shared/pipes/search.pipe';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { SortPipe } from './shared/pipes/sort.pipe';
import { TitlecasePipe } from './shared/pipes/titlecase.pipe';

import { Item } from './shared/data/models/item';
import { ItemsService } from './shared/data/items.service';

//import 'tableexport/src/v2/v2.1/tableexport-2.1.min';

import { Angular5Csv } from 'angular5-csv/Angular5-csv';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'       
})
export class AppComponent {
  pageTitle = "collectionsort - an angular solution";
  projectTitle = "collectionsort";



/* End Function Variable Declarations */
  constructor(private iService: ItemsService, private http: HttpClient) { }
  
  ngOnInit() {
  };

}
  