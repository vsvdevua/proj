import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CalculationsService } from './calculations.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sv-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proj';

  factNum: number = 0;
  fibNum: number = 0;

  strArr = ["Create", "Update", "Read", "Delete"]
  numberOfCalculations = 0;


  constructor(private calcServ: CalculationsService) {}
  

  factorial(value: string): void {
    try {
      const num = parseInt(value, 10);
      console.log('The factorial request number is: ' , num)
      this.factNum = this.calcServ.getFactorial(num);
      this.numberOfCalculations++
    } catch (error) {
      // Handle errors here, e.g., display an error message to the user
      console.error("Error calculating factorial:", error);
    }
  }

  fibonacci(value: string): void {
    try {
      const num = parseInt(value, 10);
      console.log('The request number is: ' , num)
      this.fibNum = this.calcServ.getFibonacci(num);
      this.numberOfCalculations++
    } catch (error) {
      // Handle errors here
      console.error("Error calculating fibonacci:", error);
    }
  }

  getCalculations():number{
    return this.numberOfCalculations;
  }

  get fib():number{
    return this.fibNum;
  }
}
