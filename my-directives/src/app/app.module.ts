import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AttDirectiveComponent } from './att-directive/att-directive.component';
import { StructDirectiveComponent } from './struct-directive/struct-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    AttDirectiveComponent,
    StructDirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
