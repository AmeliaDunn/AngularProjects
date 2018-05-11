import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MyRoutes } from '../shared/app-routes'; 

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { ExampleService } from './services/example-service/example.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MyRoutes),
    FormsModule
  ],
  providers: [ExampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
