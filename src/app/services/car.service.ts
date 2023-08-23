import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractHttpService } from './abstract-http.service';
import { baseEnvironment } from 'src/environments/base-environment';
import { CarProps, CarGetParams } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService extends AbstractHttpService {

  constructor(http: HttpClient) {
    super(http);
  }

  getAllCars(data: CarGetParams): Observable<CarProps[]> {
    const url = this.buildApiUrl(baseEnvironment.api.GET_ALL_CARS);
    console.log(url);
    
    return this.http.get<CarProps[]>(url, {
      params: data,
      headers: {
        'X-RapidAPI-Key': baseEnvironment.api.headers.rapidApiKey,
        'X-RapidAPI-Host': baseEnvironment.api.headers.rapidApiHost
      }
    });
  }

  generateCarImageUrl(car: CarGetParams, angle?: string): string {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;
  
    url.searchParams.append('customer', '');
    url.searchParams.append('make', make || '');
    url.searchParams.append('modelFamily', model || '');
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);
    return `${url}`;
  }
}
