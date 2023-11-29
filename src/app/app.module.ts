import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NgFor } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotesListComponent
  ],
  imports: [
    BrowserModule,
    NgFor
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
