import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { QuestionService } from './question.service';
import {QuestionComponent} from './question.component'

const appRoutes: Routes = [
  { path: 'question', component: QuestionComponent }
];

@NgModule({
  imports:      [ BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule,
                RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, QuestionComponent],
  providers:    [ QuestionService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
