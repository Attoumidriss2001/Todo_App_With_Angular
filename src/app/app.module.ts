import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { TokenInterceptor } from '@interceptors/token.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatisticComponent } from './components/statistic/statistic.component';
 import {NgApexchartsModule} from "ng-apexcharts";
import {Chart} from 'chart.js';
import { registerables } from 'chart.js';
// import { FormAndChartComponent } from './form-and-chart/form-and-chart.component';
import { FormsModule, } from '@angular/forms';
Chart.register(...registerables);

@NgModule({
  declarations: [
    AppComponent,
    StatisticComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
     NgApexchartsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
