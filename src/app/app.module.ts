import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent} from '../app/Menu/Menu.Component';
import { EmployeeService } from 'src/app/Employee/EmployeeService';
import { EmployeeComponent} from 'src/app/Employee/EmployeeComponent';


@NgModule({
  declarations: [
    AppComponent,
     MenuComponent,
     EmployeeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
