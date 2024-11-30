import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ServiceService } from '../services/service.service';




@Component({
  selector: 'app-sales-by-category',
  templateUrl: './sales-by-category.component.html',
  styleUrls: ['./sales-by-category.component.css']
})
export class SalesByCategoryComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  chart = new Chart({
    chart: {
      type: 'pie',
      height: 525
    },
    title: {
      text: 'Projets'
    },
    xAxis: {
      categories: [
        'Capex',
        'Opex',
        'Bon de Commande Capex',
        'Bon de Commande Opex',
        'Factures',
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in %'
      }
    },
    series: [
     {
      type: 'pie',
      data: [
        {
          name: 'Capex',
          y: 41.0,
          color: '#044342',
        },
        {
          name: 'Opex',
          y: 33.8,
          color: '#7e0505',
        },
        {
          name: 'Bon de Commande Capex',
          y: 6.5,
          color: '#ed9e20',
        },
        {
          name: 'Bon De Commande Opex',
          y: 15.2,
          color: '#6920fb',
        },
        {
          name: 'Factures',
          y: 3.5,
          color: '#121212',
        },
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })
}
