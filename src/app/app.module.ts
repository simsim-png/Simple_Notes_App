import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NotesListComponent } from './notes-list/notes-list.component';
// import { NgFor } from '@angular/common';
import { AddNoteComponent } from './add-note/add-note.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet, Routes, provideRouter } from '@angular/router';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const routes: Routes = [
  { path: '', component: NotesListComponent },
  { path: 'new', component: AddNoteComponent },
  { path: 'note/:id', component: NoteDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotesListComponent,
    AddNoteComponent,
    NoteDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterOutlet,
    BrowserAnimationsModule
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
