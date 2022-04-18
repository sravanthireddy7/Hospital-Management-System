import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent implements OnInit {
  constructor(private commonService: CommonService, private router: Router) {}

  doctorsInfo: Array<any> = new Array<any>();
  ngOnInit(): void {
    this.doctorsInfo = this.getDoctorsData();
  }

  getDoctorsData(): any {
    let arr = new Array();
    let data = this.commonService.getData('doctors');
    if (data != null && data != undefined) {
      arr = JSON.parse(data);
      this.doctorsInfo = arr;
      console.log(arr);
    }
    return arr;
  }
  editDoctor(id: any) {
    this.router.navigateByUrl('/edit-doctor/' + id);
  }

  deleteDoctor(id: any) {
    //alert(id);
    let index = this.doctorsInfo.findIndex((item) => item.id == id);
    this.doctorsInfo.splice(index, 1);
    this.commonService.setData(this.doctorsInfo, 'doctors');
  }
}
