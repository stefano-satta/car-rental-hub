import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IFuels, IYearProduction } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { fuels, yearsProduction } from 'src/app/shared/constants/cars';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  yearsProdCars: IYearProduction[] = yearsProduction;
  fuelType: IFuels[] = fuels;
  searchForm: FormGroup = new FormGroup({});

  constructor(private carService: CarService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.searchForm = this.fb.group({
      limit: 20,
      make: this.fb.control(''),
      model: this.fb.control(''),
      year: this.fb.control(new Date().getFullYear()),
      fuel_type: this.fb.control('')
    });
  }

  getAllCars() {
    let params = {};
    for (const [key, value] of Object.entries(this.searchForm.value)) {
      if (value) {
        params = {...params, ...{[key]: value}}
      }
    }


    //this.carService.getAllCars(params)
      //.subscribe( res => console.log(res))
  }
  
}
