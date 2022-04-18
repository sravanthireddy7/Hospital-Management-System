import { Injectable } from '@angular/core';
import { ContextService } from './context.service';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private contextService: ContextService) {}

  savePatientData(data: any) {
    return this.contextService.saveData('patients', data);
  }

  getPatienData() {
    return this.contextService.getData('patients');
  }
}
