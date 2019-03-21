import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Chart } from 'chart.js';
import { Iproduct } from '../product';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  title: string = 'Charts';
  product : Iproduct;
  test1: any[]=[];
  // private productUrl = 'api/products/product.json';
  LineChart = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // console.log("jkhfj hsk f  " + this.product);
    this.chartCallApi();
    
  }
   chartCallApi(){
    var tempArray: Iproduct[] = [];
    this.http.get('api/products/product.json').subscribe(
      data => {
                for (var i=0; i<4; i++)  
                  tempArray.push(<Iproduct>data[i]);
                  // console.log(tempArray[1].productName); 
                  this.chartCall(tempArray);  
              },
      error=> { 
                console.log("Error in recieving data"); 
              },
      ()   => {
                console.log( tempArray[4] );
              }
    );
    // console.log("working new"+ tempArray[]);
   }
   chartCall(val) {
     console.log("complete data "+ val[2].productName);
    //  test1 : val;
    //  var price: val[2].productName
         console.log("this"+JSON.stringify(val[0].price))
      for (var i=0; i<4; i++)  
                 this.test1.push(val[i].price);


      console.log("price " + this.test1);
    

    this.LineChart = new Chart('lineChart', {
      type: 'bar',
      data: {
        labels:this.test1,
        
          // labelString: [val[0].productName, val[1].productName, val[2].productName, val[3].productName],
          // [val[0].price, val[1].price, val[2].price, val[3].price, val[4].price],
        datasets: [{
          label: 'product Price Data',
          data: [5, 10, 15, 5, 25, 20, 15],
          fill: false,
          borderColor: "red",
          borderWidth: 1
        }]
      },
      options: {
        title: {
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
   }

}
