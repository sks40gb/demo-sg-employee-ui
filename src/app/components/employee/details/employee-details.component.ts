import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

// Services
import {EmployeeService} from '../../../services/employee/employee.service';
import {routerTransition} from '../../../services/config/config.service';
import {Employee} from '../../../models/employee';

@Component({
    selector: 'app-employee-details',
    templateUrl: './employee-details.component.html',
    styleUrls: ['./employee-details.component.css'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})

export class EmployeeDetailsComponent implements OnInit {
    index: any;
    employee: Employee;
    constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private toastr: ToastrService) {
        // Get user detail index number sent in params
        this.route.params.subscribe(params => {
            this.index = params['id'];
            if (this.index && this.index != null && this.index !== undefined) {
                this.getEmployeeDetails(this.index);
            }
        });
    }

    ngOnInit() {
    }

    // Get employee details
    getEmployeeDetails(index: number) {
        this.employeeService.getEmployee(index).subscribe(e=>{
            this.employee = e;
            this.toastr.success("Employee retrieved", 'Success');
        });
    }

}