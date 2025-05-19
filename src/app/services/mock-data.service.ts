import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  constructor() {}

  getMRRData() {
    return of({
      series: [
        {
          name: 'MRR',
          data: [32000, 35000, 38000, 41000, 45230, 49000, 53000],
        },
      ],
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    });
  }

  getUserGrowthData() {
    return of({
      series: [
        { name: 'Total Users', data: [800, 950, 1100, 1245, 1400, 1580, 1750] },
        { name: 'Active Users', data: [600, 720, 850, 893, 950, 1020, 1100] },
      ],
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    });
  }

  getChurnRateData() {
    return of(2.4);
  }

  getFeatureAdoptionData() {
    return of({
      series: [44, 55, 67, 83],
      labels: ['Feature A', 'Feature B', 'Feature C', 'Feature D'],
    });
  }

  getKPIData() {
    return of({
      totalUsers: 1750,
      activeUsers: 1100,
      mrr: 53000,
      churnRate: 2.4,
    });
  }
}
