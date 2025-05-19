import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://dummyjson.com/c/4851-5a83-4eb1-ac87';

  constructor(private http: HttpClient) {}

  getMRRData(): Observable<any> {
    return this.http
      .get(this.apiUrl)
      .pipe(map((response: any) => response.mrrData));
  }

  getUserGrowthData(): Observable<any> {
    return this.http
      .get(this.apiUrl)
      .pipe(map((response: any) => response.userGrowthData));
  }

  getChurnRateData(): Observable<number> {
    return this.http
      .get(this.apiUrl)
      .pipe(map((response: any) => response.churnRateData));
  }

  getFeatureAdoptionData(): Observable<any> {
    return this.http
      .get(this.apiUrl)
      .pipe(map((response: any) => response.featureAdoptionData));
  }

  getKPIData(): Observable<any> {
    return this.http
      .get(this.apiUrl)
      .pipe(map((response: any) => response.kpiData));
  }
}
