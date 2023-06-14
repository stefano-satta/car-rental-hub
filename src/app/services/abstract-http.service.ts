import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { noop } from 'rxjs';
import { baseEnvironment } from 'src/environments/base-environment';

@Injectable({
  providedIn: 'root'
})
export class AbstractHttpService {

  constructor(protected http: HttpClient) { }

  apiComposed(api: string, params: any) {
    if (params) {
      Object.keys(params).forEach(key => api = api.replace(`:${key}`, params[key]));
    }
    return api;
  }

  protected buildApiUrl(api: string, params?: object, base?: string) {
    !base ? base = baseEnvironment.api.baseUrl : noop();
    return base + this.apiComposed(api, params);

  }
}
