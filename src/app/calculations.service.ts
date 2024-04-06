import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationsService {


 calculatedEvent = new EventEmitter<Number>();  
  constructor() { }



  getFactorial(n: number): number {
    console.log(n);
    this.calculatedEvent.emit(1);
    return this.getFact(n);
    }

    getFact(n: number): number {
      if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * this.getFact(n - 1);
    }
 
}

getFibonacci(n: number): number {
  this.calculatedEvent.emit(1);
  let a = 0;
  let b = 1;
  let temp = 0;

  if (n === 0) return a;
  if (n === 1) return b;

  for (let i = 2; i <= n; i++) {
      temp = a + b;
      a = b;
      b = temp;
  }

  return b;
}



}
