import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AttDirectiveComponent } from './att-directive/att-directive.component';
import { StructDirectiveComponent } from './struct-directive/struct-directive.component';
import { ColorizerDirective } from './custom-directive/colorizer.directive';

@NgModule({
  declarations: [
    AppComponent,
    AttDirectiveComponent,
    StructDirectiveComponent,
    ColorizerDirective
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
