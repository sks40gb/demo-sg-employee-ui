import {Injectable} from '@angular/core';
import {of} from 'rxjs'
import {HttpClient} from '@angular/common/http';
import {Employee} from '../../models/employee';
import {Observable} from 'rxjs';
import { environment } from '../../../environments/environment';

const BASE_URL = environment.baseURL;

@Injectable()
export class EmployeeService {

    constructor(private http: HttpClient) {}

    public getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(BASE_URL + "/employees");
    }


    public getEmployee(id: number): Observable<Employee> {
        return this.http.get<Employee>(BASE_URL + "/employees/" + id);
    }


    public save(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(BASE_URL + "/employees", employee);
    }

    public update(employee: Employee): Observable<Employee> {
        return this.http.put<Employee>(BASE_URL + "/employees", employee);
    }

    public deleteEmployee(id: number): Observable<void> {
        return this.http.delete<void>(BASE_URL + "/employees/" + id);
    }

    generateRandomID() {
        const x = Math.floor((Math.random() * Math.random() * 9999));
        return x;
    }

}