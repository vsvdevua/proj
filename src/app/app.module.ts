import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditionalComponent } from './additional/additional.component';
import { CalculationsService } from './calculations.service';

@NgModule({
  declarations: [
    AppComponent,
    AdditionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(), {provide: 'ICalculation', useClass: CalculationsService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
