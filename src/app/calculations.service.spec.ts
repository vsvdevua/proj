import { TestBed } from '@angular/core/testing';

import { CalculationsService } from './calculations.service';

describe('CalculationsService', () => {
  let service: CalculationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('fibonacci shoud return correct values', () => {
    expect(service.getFibonacci(0)).toEqual(0);
    expect(service.getFibonacci(1)).toEqual(1);
    expect(service.getFibonacci(2)).toEqual(1);
    expect(service.getFibonacci(3)).toEqual(2);
  });

  it('factorial shoud return correct values', () => {
    expect(service.getFactorial(0)).toEqual(1);
    expect(service.getFactorial(1)).toEqual(1);
    expect(service.getFactorial(2)).toEqual(2);
    expect(service.getFactorial(3)).toEqual(6);
  });


  it('check that event emmitter works', () => {
   spyOn(service.calculatedEvent, 'emit');
   service.getFibonacci(10);
   expect(service.calculatedEvent.emit).toHaveBeenCalledOnceWith(1);
  });
});
