import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Department } from 'src/app/model/department.model';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss'],
})
export class BasicInformationComponent implements OnInit {
  departments: Array<Department> = new Array<Department>();
  isFormSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  //Creating Variable for form Data using Form Group and Form Control

  // doctorInfo = new FormGroup({
  //   deptId: new FormControl('0'),
  //   name: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   services: new FormControl(''),
  // });

  //Creating variable using FormBuilder

  doctorInfo = this.fb.group({
    id: 0,
    deptId: ['', [Validators.required]],
    name: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(15)],
    ],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    services: ['', [Validators.maxLength(100)]],
  });

  textLength: number = this.doctorInfo.controls['services'].value.length;

  btnText: string = 'Submit';
  editDoctorId: string | null = null;

  ngOnInit(): void {
    this.getDeptData();
    let doctorsData = this.getDoctorsData();
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.editDoctorId = param.get('id');
      let doctorData = doctorsData.find(
        (item: any) => item.id == param.get('id')
      );
      this.doctorInfo.setValue({
        id: doctorData.id,
        deptId: doctorData.deptId,
        name: doctorData.name,
        email: doctorData.email,
        password: doctorData.password,
        services: doctorData.services,
      });
      this.btnText = 'Update';
    });
  }
  getDeptData() {
    let arr = new Array();
    let data = localStorage.getItem('departments');
    // console.log(data);
    if (data != null && data != undefined && data != '') {
      arr = JSON.parse(data);
      this.departments = arr;
      console.log(arr);
    }
  }

  getDoctorsData(): any {
    let arr = new Array();
    let data = localStorage.getItem('doctors');
    // console.log(data);

    if (data != null && data != undefined && data != '') {
      arr = JSON.parse(data);
      // this.doctorInfo = arr;
      console.log(arr);
      return arr;
    }
  }
  saveDoctorsData() {
    this.isFormSubmitted = true;
    //alert(JSON.stringify(this.doctorInfo.value));

    let arr = new Array();
    let data = this.getDoctorsData();
    if (data != null) {
      arr = data;
    }
    //this.doctorInfo.value.controls['id'] = arr.length;
    //  this.doctorInfo.controls['id'] = this.id;
    if (this.btnText == 'Submit') {
      this.doctorInfo.patchValue({ id: arr.length + 1 });
      arr.push(this.doctorInfo.value);
      this.commonService.setData(arr, 'doctors');
      alert('Added successfully');
    } else if (this.btnText == 'Update' && this.doctorInfo.dirty) {
      //alert(this.editDoctorId);
      let index = arr.findIndex((item) => item.id == this.editDoctorId);
      //alert(index);
      arr[index].deptId = this.doctorInfo.get('deptId')?.value;
      arr[index].name = this.doctorInfo.get('name')?.value;
      arr[index].email = this.doctorInfo.get('email')?.value;
      arr[index].password = this.doctorInfo.get('password')?.value;
      arr[index].services = this.doctorInfo.get('services')?.value;
      this.commonService.setData(arr, 'doctors');
      this.resetData();
      this.router.navigateByUrl('/doctors');
      alert('Data Updated Successfully');
    } else {
      alert('No changes Found...');
      this.router.navigateByUrl('/doctors');
    }
    this.resetData();
  }
  resetData() {
    this.doctorInfo.setValue({
      id: 0,
      deptId: '',
      name: '',
      email: '',
      password: '',
      services: '',
    });
    //window.location.reload();
    this.isFormSubmitted = false;
  }
}
