import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss'],
})
export class AddPatientComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private patientService: PatientService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  patientInfo = this.fb.group({ id: [0], name: [''], gender: [''] });
  saveData() {
    this.patientService.savePatientData(this.patientInfo.value).subscribe(
      (data) => {
        alert('Data saved');
      },
      (err) => {
        alert('Data not saved');
      }
    );
    this.router.navigateByUrl('/patients');
  }
}
