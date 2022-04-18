import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {
  constructor(private patientService: PatientService) {}

  patientInfo: Array<any> = new Array<any>();

  ngOnInit(): void {
    this.patientService.getPatienData().subscribe(
      (data) => {
        this.patientInfo = data;
      },
      (err) => {}
    );
  }
}
