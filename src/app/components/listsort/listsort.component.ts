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
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

@Component({
  selector: 'app-listsort',
  templateUrl: './listsort.component.html',
  styles: []
})
export class ListsortComponent implements OnInit {

  //Sort Variables
  listIsDesc: boolean = false;  
  listDirection: number;
  listColumn: string = 'ID';

  defaultRowCount: number = 5;
  rowCount: number;
  rowLimits = [
    5,10,15,20
  ];
  

  listTitle: string = "Listsort";
  exportableHeaders = ["ID","First Name", "Last Name"];

  exportableData = [];

  /*tableFilters = [
    "All",
    "Undergraduate",
    "Postgraduate",
    "Alumni",
    "Lecturer",
    "Male",
    "Female",
  ];*/

  tableExportOptions = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true, 
    showTitle: true,
    useBom: true,
    noDownload: false,
    headers: this.exportableHeaders,
    title: this.listTitle
  };
  constructor(private iService: ItemsService, private http: HttpClient) { }

  ngOnInit() {
    //Set variable values
     this.listDirection = 1;
     this.rowCount = this.defaultRowCount;
     this.sort("id");
     this.iService.getItems();
     //this.iService.apiItems;
  };

  //Sort Function
  sort(property){
    this.listIsDesc = !this.listIsDesc; //change the direction    
    this.listColumn = property.toLowerCase();
    this.listDirection = this.listIsDesc ? 1 : -1;
  };


  limitRowCount(value){
    //Limit Table Length
    if (value === null || value === "") {
      this.rowCount = this.defaultRowCount;
    } else {
      this.rowCount = value;
      
    }
    
  };

  exportExcel(): void {
    this.tableExportOptions.headers = this.exportableHeaders;
    this.tableExportOptions.title = this.listTitle;
    for (let i = 0; i < this.iService.mockItems.length; i++) {
      this.exportableData.push(
        { id: this.iService.mockItems[i].id,
          fname: this.iService.mockItems[i].fname,
          lname: this.iService.mockItems[i].lname,
         }
      );
    }
    //Export Table to Email or Excel
    //new TableExport(document.getElementsByTagName("table"));
    new Angular5Csv(this.exportableData, this.listTitle, this.tableExportOptions);
  };
//var base64 = (document.getElementById("imageid"));
exportPDF(){
  let doc = new jsPDF();
let res = doc.autoTableHtmlToJson(document.getElementById("dataList"));

    var header = function(data) {
        doc.setFontSize(18);
        doc.setTextColor(40);
        doc.setFontStyle('normal');
    };
    var tableoptions = {
        tableWidth: 'auto',
        addPageContent: header,
        margin: {  top: 10, horizontal: 7 },
        startY:  50,
        columnStyles: {0: {columnWidth: 'wrap'}}
    };
  doc.autoTable(res.columns, res.data, tableoptions);
  doc.text(20, 20, this.listTitle);
  doc.save(this.listTitle+'.pdf');
}

}
