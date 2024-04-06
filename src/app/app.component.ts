import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CalculationsService } from './calculations.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sv-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'proj';

  factNum: number = 0;
  fibNum: number = 0;

  strArr = ["Create", "Update", "Read", "Delete"]
  numberOfCalculations = 0;
  subscription: Subscription = new Subscription;

  constructor(private calcServ: CalculationsService) {}
  
  ngOnInit(): void {
    this.subscription=this.calcServ.calculatedEvent.subscribe(()=> this.numberOfCalculations++);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  factorial(value: string): void {
    try {
      const num = parseInt(value, 10);
      console.log('The factorial request number is: ' , num)
      this.factNum = this.calcServ.getFactorial(num);
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
    } catch (error) {
      // Handle errors here
      console.error("Error calculating fibonacci:", error);
    }
  }
}
