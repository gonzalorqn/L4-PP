import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public get(region: string)
  {
    return this.http.get<Array<any>>('https://restcountries.eu/rest/v2/region/' + region);
  }

  public getByCode(code: string)
  {
    return this.http.get<Array<any>>('https://restcountries.eu/rest/v2/alpha/' + code);
  }
}
