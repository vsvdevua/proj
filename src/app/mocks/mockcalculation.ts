import { EventEmitter } from "@angular/core";
import { ICalculation } from "../calculations.service";

export class MockCalculation implements ICalculation{

    calculatedEvent = new EventEmitter<Number>();

    getFactorial(n: number): number {
        this.calculatedEvent.emit(1);
        return 1;
    }
    getFibonacci(n: number): number {
        this.calculatedEvent.emit(1);
        return 1;
    }
}