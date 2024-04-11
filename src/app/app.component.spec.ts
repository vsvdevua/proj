import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AdditionalComponent } from './additional/additional.component';
import { CalculationsService } from './calculations.service';

describe('AppComponent', () => {
  let calcServ: CalculationsService;
  const fakeServ = jasmine.createSpyObj('CalculationsService', ['getFactorial', 'getFibonacci']); 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, AdditionalComponent],
      providers: [{ provide: CalculationsService, useValue: fakeServ }] 
    }).compileComponents();

    calcServ = TestBed.inject(CalculationsService); 
    fakeServ.getFactorial.and.returnValue(1);
    fakeServ.getFibonacci.and.returnValue(1);
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

  it('array initialized', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.strArr.length).toEqual(4);
    expect(app.strArr[0]).toEqual('Create');
    expect(app.factNum).toEqual(0);
    expect(app.fibNum).toEqual(0);
  });

  it('additional component header', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h5')?.textContent).toContain('additional works!');
  });

  it('number of calculations using fixture injector', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const calcServ = fixture.debugElement.injector.get(CalculationsService);
    expect(calcServ.getFactorial(1)).toEqual(1);
    expect(calcServ.getFibonacci(1)).toEqual(1);
  });

  xit('factorial', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const calcServ = fixture.debugElement.injector.get(CalculationsService);
    app.numberOfCalculations = 0;
    const startValue = app.numberOfCalculations;
    fixture.detectChanges();
    app.factorial('3');
    expect(app.numberOfCalculations).toEqual(startValue + 1);
  });
});
