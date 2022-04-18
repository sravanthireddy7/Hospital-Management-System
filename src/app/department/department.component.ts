import { Component, OnInit } from '@angular/core';
import { Department } from '../model/department.model';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class DepartmentComponent implements OnInit {
  constructor() {}
  departments: Array<Department> = new Array<Department>();
  msg: boolean = true;
  showPopup: boolean = false;
  id: number = 0;

  ngOnInit(): void {
    this.timer();
    this.getDepartmentData();
  }
  addDepartment() {}

  editDepartment(id: any) {
    this.showPopup = true;
    this.id = id;
    // alert(id);
  }

  hidePopup() {
    this.showPopup = false;
    window.location.reload();
  }
  deleteDepartment(delId: number) {
    alert(delId);
    let arr = new Array();
    let data = localStorage.getItem('departments');
    if (data != null && data != undefined && data != '') {
      arr = JSON.parse(data);
      this.departments = arr;
      // console.log(arr);
    }
    let index = this.departments.findIndex((i) => i.id == delId);
    this.departments.splice(index, 1);
    localStorage.setItem('departments', JSON.stringify(this.departments));
  }

  getDepartmentData() {
    let arr = new Array();
    let data = localStorage.getItem('departments');
    // console.log(data);

    if (data != null && data != undefined && data != '') {
      arr = JSON.parse(data);
      this.departments = arr;
      // console.log(arr);
    }
  }
  timer() {
    setTimeout(() => ((this.msg = false), console.log(this.msg)), 1000);
    setTimeout(function () {
      // this.msg = false;
      console.log('Summy');
    }, 1000);
  }
}
