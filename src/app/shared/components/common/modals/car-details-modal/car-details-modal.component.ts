import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarProps } from 'src/app/models/car';

@Component({
  selector: 'app-car-details-modal',
  templateUrl: './car-details-modal.component.html',
  styleUrls: ['./car-details-modal.component.scss']
})
export class CarDetailsModalComponent {
  @Input() car: CarProps | null = null;

  constructor(public activeModal: NgbActiveModal) {}

  getCarName(): string {
    return `${this.car?.make} ${this.car?.model}`
  }
}
