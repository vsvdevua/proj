import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AdditionalComponent } from './additional/additional.component';
import { CalculationsService } from './calculations.service';
import { MockCalculation } from './mocks/mockcalculation';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent, AdditionalComponent
      ],
      providers: [
        {provide: 'ICalculation', useExisting: CalculationsService}
      ],
    }).compileComponents();
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


  fit('number of calculations using fixture injector' , () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const calcServ = fixture.debugElement.injector.get(CalculationsService);
    const startValue = app.numberOfCalculations;
    fixture.detectChanges(); 
    calcServ.getFactorial(3);
    expect(app.numberOfCalculations).toEqual(startValue + 1);
  });

  it('number of calculations using manually injected service' , () => {
    const calcServ = new MockCalculation();
    const component = new AppComponent(calcServ);
    component.ngOnInit();
    const startValue = component.numberOfCalculations;
    calcServ.getFactorial(3);
    expect(component.numberOfCalculations).toEqual(startValue + 1);
  });

});
