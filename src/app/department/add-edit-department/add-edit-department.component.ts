import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Department } from 'src/app/model/department.model';

@Component({
  selector: 'app-add-edit-department',
  templateUrl: './add-edit-department.component.html',
  styleUrls: ['./add-edit-department.component.scss'],
})
export class AddEditDepartmentComponent implements OnInit {
  constructor() {}
  showMessage: boolean = false;

  isNameValid: boolean = false;
  isEmergencyNoValid: boolean = false;
  isDescriptionValid: boolean = false;

  isValid: boolean = true;

  requiredClass: string = '';
  addUpdateBtn: string = 'Add';
  successMsg: string = 'Data Stored Successfully...';

  department: Department = new Department();
  departments: Array<Department> = new Array<Department>();

  editDepartment: Department = new Department();

  ngOnInit(): void {
    //console.log(this.getDepartmentData());
  }
  @Input() editId: number = 0;
  @Output() updateDataNotification: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  ngOnChanges() {
    alert(this.editId);
    this.getDepartmentData();
    this.department = this.editDept()[0];
    console.log(this.department);
    this.addUpdateBtn = 'Update';
  }
  formValidation() {
    if (this.department.name == null && this.department.name == '') {
      this.isNameValid = false;
    }
    if (this.department.emergencyNo == null) {
      this.isEmergencyNoValid = false;
    }
    if (this.department.description == '') {
      this.isDescriptionValid = false;
    }
    if (
      !this.isNameValid ||
      !this.isEmergencyNoValid ||
      !this.isDescriptionValid
    ) {
      this.isValid = false;
      this.requiredClass = 'text-danger';
    } else {
      this.isValid = true;
    }
  }
  saveDepartment() {
    this.formValidation();
    if (this.department.name.trim().length == 0) {
      this.isNameValid = true;
    }
    if (this.department.emergencyNo == null) {
      this.isEmergencyNoValid = true;
    }
    if (this.department.description == '') {
      this.isDescriptionValid = true;
    }
    if (!this.isValid) {
      let arr = new Array();
      let data = localStorage.getItem('departments');
      console.log(data);

      if (data != null && data != undefined && data != '') {
        arr = JSON.parse(data);
        console.log(arr);
      }
      let fil = arr.filter(
        (item) =>
          this.department.name == item.name ||
          this.department.emergencyNo == item.emergencyNo ||
          this.department.description == item.description
      );
      console.log(fil);
      if (fil.length == 0 && this.addUpdateBtn == 'Add') {
        this.department.id = arr.length + 1;
        arr.push(this.department);
        localStorage.setItem('departments', JSON.stringify(arr));
      } else if (this.addUpdateBtn == 'Add') {
        alert('Record exists');
      }
      if (this.editId != 0 && this.addUpdateBtn == 'Update') {
        this.updateDepartmentData();
        this.successMsg = 'Data Updated Successfully';
        this.updateDataNotification.emit(true);
      }
    }

    this.department.name = '';
    this.department.emergencyNo = null;
    this.department.description = '';
    this.showMessage = true;
    this.requiredClass = '';

    if (
      !this.isNameValid ||
      !this.isEmergencyNoValid ||
      !this.isDescriptionValid
    ) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
    this.timer();
  }
  timer() {
    setTimeout(() => (this.showMessage = false), 2000);
  }

  editDept(): any {
    return this.departments.filter((item) => item.id == this.editId);
  }

  getDepartmentData() {
    let arr = new Array();
    let data = localStorage.getItem('departments');
    console.log(data);

    if (data != null && data != undefined && data != '') {
      arr = JSON.parse(data);
      this.departments = arr;
      // console.log(arr);
    }
  }

  updateDepartmentData() {
    this.getDepartmentData();
    let index = this.departments.findIndex((i) => i.id == this.editId);
    this.departments[index].name = this.department.name;
    this.departments[index].emergencyNo = this.department.emergencyNo;
    this.departments[index].description = this.department.description;
    localStorage.setItem('departments', JSON.stringify(this.departments));
  }
}
