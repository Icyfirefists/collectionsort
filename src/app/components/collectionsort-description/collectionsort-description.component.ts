import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collectionsort-description',
  templateUrl: './collectionsort-description.component.html',
  styles: []
})
export class CollectionsortDescriptionComponent implements OnInit {

  
  features = [
    "Data Collection Display",
    "Data Export - Excel",
    "Data Export - PDF",
    "Filtering",
    "Searching",
    "Sorting",    
    "Pagination",    
    "Limiting Rows",
    "TitleCase",
    
  ]

  practices = [
    "JSON Data Interaction",
    "*ngFor Interpolation",
    "Sass/SCSS",
    "Data Services",
    "jsPDF",
    "Bootstrap/Responsive Design",    
    "...",    
    
  ]

  public titlecaseText: string = '';

  constructor() { }

  ngOnInit() {
  }

}
