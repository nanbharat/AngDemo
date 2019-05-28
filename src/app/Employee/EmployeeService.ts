import { Component } from '@angular/core';
import { Employee } from 'src/app/Module/Module';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map,  tap , retry, catchError} from 'rxjs/operators';
import { getParseErrors } from '@angular/compiler';




@Injectable()
export class EmployeeService{

    public Employess : Employee[];
    public getReq:string="https://localhost:44334/api/employee/GetData";

    
    public constructor( private http: HttpClient  ){  }


    getEmployee(){
      
        debugger;

       return this.http.get<Employee[]>(this.getReq);
      

    }



   

  


  



}