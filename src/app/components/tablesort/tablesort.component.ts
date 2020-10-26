declare var require: any;
var jsPDF = require('jspdf');
require('jspdf-autotable');
import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { SearchPipe } from '../../shared/pipes/search.pipe';
import { FilterPipe } from '../../shared/pipes/filter.pipe';
import { SortPipe } from '../../shared/pipes/sort.pipe';
import { TitlecasePipe } from '../../shared/pipes/titlecase.pipe';

import { Item } from '../../shared/data/models/item';
import { ItemsService } from '../../shared/data/items.service';

//import 'tableexport/src/v2/v2.1/tableexport-2.1.min';

import { Angular5Csv } from 'angular5-csv/Angular5-csv';

@Component({
  selector: 'app-tablesort',
  templateUrl: './tablesort.component.html',
  styles: []
})
export class TablesortComponent implements OnInit {

  /* Variables Necessary to Sort/Search/Filter below */
  //private apiurl = 'your-url.your-api.your-data'; //uncomment for use with Items Service and Online API data
  //public apiItems: any; //uncomment for use with Items Service and Online API data
  
  //Sort Variables
  tableIsDesc: boolean = false;  
  tableDirection: number;
  tableColumn: string = 'ID';

  //Filter Variables
  filterTerm: string;

  tableEmpty: boolean = false;  
  defaultTableLength: number = 5;
  tableLength: number;
  tableRowLimits = [
    5,10,15,20
  ];
  

  p: number = 1;

  tableTitle: string = "Tablesort";
  
  tableHeaders = [
    "ID",
    "First Name",
    "Last Name",
    "Username",
    "Sex",
    "Age",
    "Phone",
    "Occupation",
  ];

  exportableHeaders = ["ID","First Name", "Last Name", "Username", "Sex", "Age", "Phone", "Ocupation"];

  exportableData = [];

  tableFilters = [
    "All",
    "Undergraduate",
    "Postgraduate",
    "Alumni",
    "Lecturer",
    "Male",
    "Female",
  ];

  tableExportOptions = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true, 
    showTitle: true,
    useBom: true,
    noDownload: false,
    headers: this.exportableHeaders,
    title: this.tableTitle
  };

  constructor(private iService: ItemsService, private http: HttpClient) { }

  ngOnInit() {
    //Set variable values
     this.tableDirection = 1;
     this.tableLength = this.defaultTableLength;
     this.sort("id");
     this.iService.getItems();
     //this.iService.apiItems;
  };

  //Sort Function
  sort(property){
    this.tableIsDesc = !this.tableIsDesc; //change the tableDirection    
    this.tableColumn = property.toLowerCase();
    this.tableDirection = this.tableIsDesc ? 1 : -1;
  };

  //Filter tools
  showAll(){
    //Return all items if currently filtered
    this.filterTerm = '';
  };

  filterBy(property){
    //Filter by Sex
    if (property === 'all') {
      this.filterTerm = '';
    } else { 
      this.filterTerm = property;
    }  
  };

  limitTableLength(value){
    //Limit Table Length
    if (value === null || value === "") {
      this.tableLength = this.defaultTableLength;
    } else {
      this.tableLength = value;
      
    }
    
  };

  showNext(value){
    //Limit Table Length
    if (value === null || value === "") {
      this.tableLength = this.defaultTableLength;
    } else {
      this.tableLength = value;
    }
    
  };

  exportExcel(): void {
    this.tableExportOptions.headers = this.exportableHeaders;
    this.tableExportOptions.title = this.tableTitle;
    for (let i = 0; i < this.iService.mockItems.length; i++) {
      this.exportableData.push(
        { id: this.iService.mockItems[i].id,
          fname: this.iService.mockItems[i].fname,
          lname: this.iService.mockItems[i].lname,
          username: this.iService.mockItems[i].username,
          sex: this.iService.mockItems[i].sex,
          age: this.iService.mockItems[i].age,
          phone: this.iService.mockItems[i].phone,
          occupation: this.iService.mockItems[i].occupation,
         }
      );
    }
    //Export Table to Email or Excel
    //new TableExport(document.getElementsByTagName("table"));
    new Angular5Csv(this.exportableData, this.tableTitle, this.tableExportOptions);
  };
//var base64 = (document.getElementById("imageid"));
exportPDF(){
  let doc = new jsPDF();
let res = doc.autoTableHtmlToJson(document.getElementById("dataTable"));

    let header = function(data) {
        doc.setFontSize(18);
        doc.setTextColor(40);
        doc.setFontStyle('normal');
    };
    let tableOptions = {
        tableWidth: 'auto',
        addPageContent: header,
        margin: {  top: 10, horizontal: 7 },
        startY:  50,
        columnStyles: {0: {columnWidth: 'wrap'}}
    };
  doc.autoTable(res.columns, res.data, tableOptions);
  doc.text(20, 20, this.tableTitle);
  doc.save(this.tableTitle+'.pdf');
}


}
