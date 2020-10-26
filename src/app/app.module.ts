import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgxPaginationModule } from 'ngx-pagination';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchPipe } from './shared/pipes/search.pipe';
import { SortPipe } from './shared/pipes/sort.pipe';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { ItemsService } from './shared/data/items.service';
import { TitlecasePipe } from './shared/pipes/titlecase.pipe';
import { TablesortComponent } from './components/tablesort/tablesort.component';
import { ListsortComponent } from './components/listsort/listsort.component';
import { CollectionsortDescriptionComponent } from './components/collectionsort-description/collectionsort-description.component';


@NgModule({
  declarations: [
    SearchPipe,
    SortPipe,
    AppComponent,
    FilterPipe,
    TitlecasePipe,
    TablesortComponent,
    ListsortComponent,
    CollectionsortDescriptionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    //CommonModule
  ],
  providers: [
    ItemsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
