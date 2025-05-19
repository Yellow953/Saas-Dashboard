import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../services/mock-data.service';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  // KPI Cards Data
  kpiData: any = {};

  // Chart Options
  mrrChartOptions: any = {};
  userGrowthChartOptions: any = {};
  churnRateChartOptions: any = {};
  featureAdoptionChartOptions: any = {};

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    // Load KPI Data
    this.mockDataService.getKPIData().subscribe((data) => {
      this.kpiData = data;
    });

    // Load MRR Chart Data
    this.mockDataService.getMRRData().subscribe((data) => {
      this.mrrChartOptions = {
        series: data.series,
        chart: {
          type: 'area',
          height: 350,
          toolbar: { show: false },
        },
        colors: ['#4CAF50'],
        dataLabels: { enabled: false },
        stroke: { curve: 'smooth' },
        xaxis: {
          categories: data.categories,
          title: { text: 'Month' },
        },
        yaxis: {
          title: { text: 'Revenue ($)' },
          labels: {
            formatter: (value: number) => `$${value.toLocaleString()}`,
          },
        },
        tooltip: {
          y: { formatter: (val: number) => `$${val.toLocaleString()}` },
        },
      };
    });

    // Load User Growth Chart Data
    this.mockDataService.getUserGrowthData().subscribe((data) => {
      this.userGrowthChartOptions = {
        series: data.series,
        chart: {
          type: 'bar',
          height: 350,
        },
        colors: ['#3F51B5', '#2196F3'],
        plotOptions: {
          bar: { horizontal: false, columnWidth: '55%' },
        },
        dataLabels: { enabled: false },
        stroke: { show: true, width: 2, colors: ['transparent'] },
        xaxis: {
          categories: data.categories,
        },
        yaxis: { title: { text: 'Users' } },
        fill: { opacity: 1 },
        tooltip: {
          y: { formatter: (val: number) => `${val} users` },
        },
      };
    });

    // Load Churn Rate Chart Data
    this.mockDataService.getChurnRateData().subscribe((data) => {
      this.churnRateChartOptions = {
        series: [data],
        chart: {
          height: 350,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            hollow: { margin: 0, size: '70%' },
            dataLabels: {
              name: { fontSize: '16px', color: '#666', offsetY: 70 },
              value: {
                offsetY: -10,
                fontSize: '22px',
                color: '#333',
                formatter: (val: number) => `${val}%`,
              },
            },
          },
        },
        colors: ['#FF5722'],
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91],
          },
        },
        stroke: { dashArray: 4 },
        labels: ['Churn Rate'],
      };
    });

    // Load Feature Adoption Chart Data
    this.mockDataService.getFeatureAdoptionData().subscribe((data) => {
      this.featureAdoptionChartOptions = {
        series: data.series,
        chart: {
          height: 350,
          type: 'donut',
        },
        labels: data.labels,
        colors: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        responsive: [
          {
            breakpoint: 480,
            options: { chart: { width: 200 } },
          },
        ],
        legend: { position: 'right' },
      };
    });
  }
}
