import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditDepartmentComponent } from './department/add-edit-department/add-edit-department.component';
import { DepartmentComponent } from './department/department.component';
import { AddDoctorComponent } from './doctors/add-doctor/add-doctor.component';
import { BasicInformationComponent } from './doctors/basic-information/basic-information.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AddPatientComponent } from './patient/add-patient/add-patient.component';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
  { path: 'doctors', component: DoctorsComponent },
  { path: 'add-doctor', component: AddDoctorComponent },
  { path: 'edit-doctor/:id', component: BasicInformationComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'add-edit-department', component: AddEditDepartmentComponent },
  { path: 'patients', component: PatientComponent },
  { path: 'add-patient', component: AddPatientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
