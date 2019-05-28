import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Module/Module';
import { EmployeeService } from 'src/app/Employee/EmployeeService'
import { Observable, throwError } from 'rxjs';
import { map,  tap , retry, catchError} from 'rxjs/operators';
import { getParseErrors } from '@angular/compiler';


@Component({
    selector:'app-employee',
    templateUrl:'./Employee.html',
    providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit
{
    public Employess :Employee[]; 

    public constructor( private _EmployeeService:EmployeeService ){}
    
    ngOnInit()
    {
        debugger;

         this._EmployeeService.getEmployee().
         pipe( retry(1), catchError(this.HandleError)).subscribe((emp)=> this.Employess);
    
    }



    HandleError(error)
    {
        let msg = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            msg = `Error: ${error.error.message}`;
          } else {
            // server-side error
            msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
          window.alert(msg);
          return throwError(msg);
    }
    

  

    // public getEmployeeList():Observable<Employee[]>{
    //     return
    // }

    

    

}



