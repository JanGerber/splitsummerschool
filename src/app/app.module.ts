import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {SearchNameComponent} from './searchName/searchName.component';
import {HttpModule} from '@angular/http';



const appRoutes: Routes = [
  { path: 'home', component: SearchNameComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchNameComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent,
  SearchNameComponent]
})
export class AppModule { }
