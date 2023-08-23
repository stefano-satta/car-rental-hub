import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarGetParams, CarProps, IFuels, ISearchCarFormModel, IYearProduction } from 'src/app/models/car';
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
  cars: CarProps[] = [
    {
        "city_mpg": 18,
        "class": "standard sport utility vehicle",
        "combination_mpg": 19,
        "cylinders": 4,
        "displacement": 2.0,
        "drive": "4wd",
        "fuel_type": "gas",
        "highway_mpg": 21,
        "make": "land rover",
        "model": "defender 90",
        "transmission": "a",
        "year": 2023
    },
    {
        "city_mpg": 25,
        "class": "small sport utility vehicle",
        "combination_mpg": 28,
        "cylinders": 4,
        "displacement": 2.5,
        "drive": "fwd",
        "fuel_type": "gas",
        "highway_mpg": 32,
        "make": "kia",
        "model": "sportage fwd",
        "transmission": "a",
        "year": 2023
    },
    {
        "city_mpg": 23,
        "class": "small sport utility vehicle",
        "combination_mpg": 25,
        "cylinders": 4,
        "displacement": 2.5,
        "drive": "awd",
        "fuel_type": "gas",
        "highway_mpg": 28,
        "make": "kia",
        "model": "sportage awd",
        "transmission": "a",
        "year": 2023
    },
    {
        "city_mpg": 19,
        "class": "standard sport utility vehicle",
        "combination_mpg": 21,
        "cylinders": 4,
        "displacement": 2.0,
        "drive": "4wd",
        "fuel_type": "gas",
        "highway_mpg": 22,
        "make": "land rover",
        "model": "discovery",
        "transmission": "a",
        "year": 2023
    },
    {
        "city_mpg": 19,
        "class": "standard sport utility vehicle",
        "combination_mpg": 22,
        "cylinders": 6,
        "displacement": 3.0,
        "drive": "4wd",
        "fuel_type": "gas",
        "highway_mpg": 25,
        "make": "land rover",
        "model": "discovery mhev",
        "transmission": "a",
        "year": 2023
    },
    {
        "city_mpg": 17,
        "class": "standard sport utility vehicle",
        "combination_mpg": 18,
        "cylinders": 4,
        "displacement": 2.0,
        "drive": "4wd",
        "fuel_type": "gas",
        "highway_mpg": 20,
        "make": "land rover",
        "model": "defender 110",
        "transmission": "a",
        "year": 2023
    },
    {
        "city_mpg": 18,
        "class": "standard sport utility vehicle",
        "combination_mpg": 20,
        "cylinders": 6,
        "displacement": 3.0,
        "drive": "4wd",
        "fuel_type": "gas",
        "highway_mpg": 23,
        "make": "land rover",
        "model": "defender 110 mhev",
        "transmission": "a",
        "year": 2023
    },
    {
        "city_mpg": 18,
        "class": "standard sport utility vehicle",
        "combination_mpg": 20,
        "cylinders": 6,
        "displacement": 3.0,
        "drive": "4wd",
        "fuel_type": "gas",
        "highway_mpg": 23,
        "make": "land rover",
        "model": "defender 90 mhev",
        "transmission": "a",
        "year": 2023
    },
    {
        "city_mpg": 15,
        "class": "standard sport utility vehicle",
        "combination_mpg": 16,
        "cylinders": 8,
        "displacement": 5.0,
        "drive": "4wd",
        "fuel_type": "gas",
        "highway_mpg": 19,
        "make": "land rover",
        "model": "defender 90",
        "transmission": "a",
        "year": 2023
    },
    {
        "city_mpg": 14,
        "class": "standard sport utility vehicle",
        "combination_mpg": 16,
        "cylinders": 8,
        "displacement": 5.0,
        "drive": "4wd",
        "fuel_type": "gas",
        "highway_mpg": 19,
        "make": "land rover",
        "model": "defender 110",
        "transmission": "a",
        "year": 2023
    },
    {
        "city_mpg": 20,
        "class": "small sport utility vehicle",
        "combination_mpg": 22,
        "cylinders": 4,
        "displacement": 2.0,
        "drive": "awd",
        "fuel_type": "gas",
        "highway_mpg": 27,
        "make": "land rover",
        "model": "range rover evoque",
        "transmission": "a",
        "year": 2023
    },
    {
        "city_mpg": 19,
        "class": "small sport utility vehicle",
        "combination_mpg": 20,
        "cylinders": 4,
        "displacement": 2.0,
        "drive": "awd",
        "fuel_type": "gas",
        "highway_mpg": 23,
        "make": "land rover",
        "model": "discovery sport",
        "transmission": "a",
        "year": 2023
    },
    {
        "city_mpg": 16,
        "class": "two seater",
        "combination_mpg": 18,
        "cylinders": 8,
        "displacement": 5.0,
        "drive": "awd",
        "fuel_type": "gas",
        "highway_mpg": 24,
        "make": "jaguar",
        "model": "f-type r awd coupe",
        "transmission": "a",
        "year": 2023
    },
    {
        "city_mpg": 16,
        "class": "two seater",
        "combination_mpg": 18,
        "cylinders": 8,
        "displacement": 5.0,
        "drive": "awd",
        "fuel_type": "gas",
        "highway_mpg": 24,
        "make": "jaguar",
        "model": "f-type r awd convertible",
        "transmission": "a",
        "year": 2023
    },
    {
        "city_mpg": 17,
        "class": "two seater",
        "combination_mpg": 19,
        "cylinders": 8,
        "displacement": 5.0,
        "drive": "rwd",
        "fuel_type": "gas",
        "highway_mpg": 24,
        "make": "jaguar",
        "model": "f-type p450 rwd coupe",
        "transmission": "a",
        "year": 2023
    },
    {
        "city_mpg": 17,
        "class": "two seater",
        "combination_mpg": 19,
        "cylinders": 8,
        "displacement": 5.0,
        "drive": "rwd",
        "fuel_type": "gas",
        "highway_mpg": 24,
        "make": "jaguar",
        "model": "f-type p450 rwd convertible",
        "transmission": "a",
        "year": 2023
    },
    {
        "city_mpg": 16,
        "class": "two seater",
        "combination_mpg": 18,
        "cylinders": 8,
        "displacement": 5.0,
        "drive": "awd",
        "fuel_type": "gas",
        "highway_mpg": 24,
        "make": "jaguar",
        "model": "f-type p450 awd r-dynamic coupe",
        "transmission": "a",
        "year": 2023
    },
    {
        "city_mpg": 16,
        "class": "two seater",
        "combination_mpg": 18,
        "cylinders": 8,
        "displacement": 5.0,
        "drive": "awd",
        "fuel_type": "gas",
        "highway_mpg": 24,
        "make": "jaguar",
        "model": "f-type p450 awd r-dynamic convertible",
        "transmission": "a",
        "year": 2023
    },
    {
        "city_mpg": 17,
        "class": "compact car",
        "combination_mpg": 20,
        "cylinders": 6,
        "displacement": 3.3,
        "drive": "awd",
        "fuel_type": "gas",
        "highway_mpg": 26,
        "make": "genesis",
        "model": "g70 awd",
        "transmission": "a",
        "year": 2023
    },
    {
        "city_mpg": 18,
        "class": "compact car",
        "combination_mpg": 21,
        "cylinders": 6,
        "displacement": 3.3,
        "drive": "rwd",
        "fuel_type": "gas",
        "highway_mpg": 27,
        "make": "genesis",
        "model": "g70 rwd",
        "transmission": "a",
        "year": 2023
    }
];
  searchForm: FormGroup<ISearchCarFormModel> = this.fb.group({
    limit: this.fb.control<string>('20'),
    make: this.fb.control<string>(''),
    model: this.fb.control<string>(''),
    year: this.fb.control<string>(new Date().getFullYear().toString()),
    fuel_type: this.fb.control<string>('')
  });;

  constructor(private carService: CarService, private fb: FormBuilder) {}

  ngOnInit(): void {
    //this.initForm();
    //this.getAllCars();
    
  }

//   initForm() {
//     this.searchForm = this.fb.group({
//       limit: this.fb.control<string>('20'),
//       make: this.fb.control<string>(''),
//       model: this.fb.control<string>(''),
//       year: this.fb.control<string>(new Date().getFullYear().toString()),
//       fuel_type: this.fb.control<string>('')
//     });
//   }

  getAllCars() {
    let params: CarGetParams = {};
    for (const [key, value] of Object.entries(this.searchForm.value)) {
      if (value) {
        params = {...params, ...{[key]: value}}
      }
    }
    console.log(params);
    
    this.carService.getAllCars(params)
      .subscribe( res => {
        console.log(res);
        this.cars = res;
      })
  }
}
