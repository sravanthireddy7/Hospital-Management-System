import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { DepartmentComponent } from './department/department.component';
import { AddEditDepartmentComponent } from './department/add-edit-department/add-edit-department.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorsComponent } from './doctors/doctors.component';
import { AddDoctorComponent } from './doctors/add-doctor/add-doctor.component';
import { BasicInformationComponent } from './doctors/basic-information/basic-information.component';
import { PatientComponent } from './patient/patient.component';
import { AddPatientComponent } from './patient/add-patient/add-patient.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    TopBannerComponent,
    MainLayoutComponent,
    DepartmentComponent,
    AddEditDepartmentComponent,
    DoctorsComponent,
    AddDoctorComponent,
    BasicInformationComponent,
    PatientComponent,
    AddPatientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
