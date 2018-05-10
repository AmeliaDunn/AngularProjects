import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MyRoutes } from '../shared/app-routes'; 

import { AppComponent } from './app.component';
import { WelcomeComponent } from '../app/components/welcome/welcome.component';
import { DataBindingComponent } from '../app/components/data-binding/data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MyRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
