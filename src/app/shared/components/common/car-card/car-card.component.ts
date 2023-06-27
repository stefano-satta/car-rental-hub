import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarProps } from 'src/app/models/car';
import { CarDetailsModalComponent } from '../modals/car-details-modal/car-details-modal.component';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent {
  @Input() car: CarProps | null = null;

  constructor(private modalService: NgbModal) {}

  openModalDetails() {
    const modalRef = this.modalService.open(CarDetailsModalComponent, 
      {backdrop: 'static', size: 'md', keyboard: true, centered: true});
    modalRef.componentInstance.car = this.car;
  }

}
