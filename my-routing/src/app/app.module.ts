import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const APP_ROUTES: Routes = [
{ path: '', component: HomeComponent },
{ path: 'products', component: ProductsComponent, data: { title: "ProductsPage"} },
{ path:'**', component: PageNotFoundComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
