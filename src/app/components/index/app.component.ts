import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Employee Management By Sangwin Gawande';

    // Add few employees for initial listing
    employeesList = [
        {
            id: 1,
            first_name: "Sangwin",
            last_name: "Gawande",
            email: "sangwin@yopmail.com",
            gender: "MALE"
        },
        {
            id: 2,
            first_name: "Oman",
            last_name: "Umir",
            email: "oman@yopmail.com",
            gender: "MALE"
        },
        {
            id: 3,
            first_name: "Tina",
            last_name: "Dillon",
            email: "tina@yopmail.com",
            gender: "FEMALE"
        },
        {
            id: 4,
            first_name: "John",
            last_name: "Doe",
            email: "john@yopmail.com",
            gender: "FEMALE"
        },
        {
            id: 5,
            first_name: "Peter",
            last_name: "Parker",
            email: "peter@yopmail.com",
            gender: "MALE"
        }
    ];

    constructor() {
        // Save employees to localStorage
        localStorage.setItem('employees', JSON.stringify(this.employeesList));
    }
}
