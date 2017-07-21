import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // For NgModel.

import { AppComponent } from './app.component';
import { CandidateDetailComponent } from './candidate-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
