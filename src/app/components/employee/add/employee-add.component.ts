import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
// Services
import {ValidationService} from '../../../services/config/config.service';
import {EmployeeService} from '../../../services/employee/employee.service';
import {routerTransition} from '../../../services/config/config.service';
import {ToastrService} from 'ngx-toastr';
import {Employee} from '../../../models/employee';

@Component({
    selector: 'employee-add',
    templateUrl: './employee-add.component.html',
    styleUrls: ['./employee-add.component.css'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})

export class EmployeeAddComponent {
    // create employeeForm of type FormGroup
    employeeForm: FormGroup;
    employeeId: any;

    constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute,
        private employeeService: EmployeeService, private toastr: ToastrService) {

        // Check for route params
        this.route.params.subscribe(params => {
            this.employeeId = params['id'];
            // check if ID exists in route & call update or add methods accordingly
            if (this.employeeId) {
                this.getEmployeeDetails(this.employeeId);
            } else {
                this.createForm(null);
            }
        });
    }

    // Submit employee details form
    doRegister() {
        if (this.employeeId && this.employeeId !== null && this.employeeId !== undefined) {
            this.employeeForm.value.id = this.employeeId;
            this.employeeService.update(this.employeeForm.value).subscribe(e => {
                this.router.navigate(['/']);
                this.toastr.success("Employee updated successfully.", 'Success');
            }, error => {
                this.toastr.error("Error occurred while updating the employee.", 'Error');
            })
        } else {
            this.employeeId = null;
            this.employeeService.save(this.employeeForm.value).subscribe(e => {
                this.router.navigate(['/']);
                this.toastr.success("Employee saved successfully.", 'Success');
            }, error => {
                this.toastr.error("Error occurred while saving the employee.", 'Error');
            })
        }
    }

    // If this is update form, get user details and update form
    getEmployeeDetails(employeeId: number) {
        this.employeeService.getEmployee(employeeId).subscribe(e => {
            this.createForm(e);
        })
    }

    // If this is update request then auto fill form
    createForm(data: Employee) {
        if (data === null) {
            this.employeeForm = this.formBuilder.group({
                firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
                lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
                gender: ['', [Validators.required]],
                email: ['', [Validators.required, ValidationService.emailValidator]]
            });
        } else {
            this.employeeForm = this.formBuilder.group({
                firstName: [data.firstName, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
                lastName: [data.lastName, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
                gender: [data.gender, [Validators.required]],
                email: [data.email, [Validators.required, ValidationService.emailValidator]]
            });
        }
    }

}