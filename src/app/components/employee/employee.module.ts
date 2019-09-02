import {NgModule} from '@angular/core';

// Modules
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {RouterModule} from '@angular/router';
// Services
import {EmployeeService} from '../../services/employee/employee.service';

// Components
import {EmployeeListComponent} from './list/employee-list.component';
import {EmployeeDetailsComponent} from './details/employee-details.component';
import {EmployeeAddComponent} from './add/employee-add.component';
import {HighlightEmployeeDirective} from '../../directives/highlight-employee.directive';

// @TODO - move this into core module.
import {FilterPipe} from '../../pipes/filter.pipe';
import {PhonePipe} from '../../pipes/phone.pipe';

@NgModule({
    declarations: [
        EmployeeListComponent,
        EmployeeDetailsComponent,
        EmployeeAddComponent,
        HighlightEmployeeDirective,
        //filters 
        FilterPipe,
        PhonePipe,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
    ],
    providers: [EmployeeService]
})

export class EmployeeModule {}
