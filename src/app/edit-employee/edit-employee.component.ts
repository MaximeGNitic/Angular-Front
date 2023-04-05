import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Employee } from '../employees/employee.class';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  id: any;
  data: any;
  employee = new Employee();

  constructor(private route: ActivatedRoute, private dataService: DataService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getEmployeeData();
  }

  updateData(){
    this.dataService.updateData(this.employee, this.id).subscribe(res => {
      this.updateData();
    });
  }

  getEmployeeData(){
    this.dataService.getEmployeeData(this.id).subscribe(res => {
      this.data = res;
      this.employee = this.data;
      console.log(this.employee);
    });
  }
}
