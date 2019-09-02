import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

// Services
import {EmployeeService} from '../../../services/employee/employee.service';
import {routerTransition} from '../../../services/config/config.service';
import {Employee} from '../../../models/employee';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})

export class EmployeeListComponent implements OnInit {
    employeeListData: Employee[];
    constructor(private employeeService: EmployeeService, private toastr: ToastrService) {}
    // Call employee list function on page load
    ngOnInit() {
        this.getEmployeeList();
    }

    // Get employee list from services
    getEmployeeList() {
        this.employeeService.getEmployees().subscribe(employeeList=>{
            this.employeeListData = employeeList;
        })
    }

    // Delete a employee with its index
    deleteEmployee(index: number) {
        // get confirm box for confirmation
        const r = confirm('Are you sure?');
        if (r === true) {
            this.employeeService.deleteEmployee(index).subscribe(res=>{
                this.toastr.success('Success', 'Employee Deleted');
                this.getEmployeeList();
            });
        }
    }
}