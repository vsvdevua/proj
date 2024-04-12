
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AdditionalComponent } from './additional/additional.component';
import { CalculationsService } from './calculations.service';
import { EventEmitter } from '@angular/core';

describe('AppComponent', () => {
  let calcServ: CalculationsService;
  const fakeServ = jasmine.createSpyObj('fakeServ', ['getFactorial', 'getFibonacci'], { calculatedEvent: new EventEmitter() });

 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, AdditionalComponent],
      providers: [{ provide: CalculationsService, useValue: fakeServ }]
    }).compileComponents();

    calcServ = TestBed.inject(CalculationsService);

    fakeServ.getFactorial.and.callFake(() => {
      fakeServ.calculatedEvent.emit(1);
      return 1; 
    });
    fakeServ.getFibonacci.and.callFake(() => {
      fakeServ.calculatedEvent.emit(1);
      return 1; 
    });
   
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'proj'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('proj');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, proj');
  });

  it('array inithialized', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.strArr.length).toEqual(4);
    expect(app.strArr[0]).toEqual("Create");
    expect(app.factNum).toEqual(0);
    expect(app.fibNum).toEqual(0);
  });

  it('additional component header', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h5')?.textContent).toContain('additional works!');
  });


  fit('number of calculations using fixture injector', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const startValue = app.numberOfCalculations;
    expect(calcServ.getFactorial(1)).toEqual(1);
    expect(calcServ.getFibonacci(1)).toEqual(1);
    fixture.detectChanges();
    console.log('before call: ' + app.numberOfCalculations);
    calcServ.getFactorial(1);
    console.log('after call: ' + app.numberOfCalculations);
    expect(app.numberOfCalculations).toEqual(startValue + 1);
    calcServ.getFactorial(1);
    console.log('after second call: ' + app.numberOfCalculations);
    expect(app.numberOfCalculations).toEqual(startValue + 2);
  });


});
