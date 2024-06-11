import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { UserinforPageComponent } from './pages/userinfor-page/userinfor-page.component';
import { PropertiesPagesComponent } from './pages/properties-pages/properties-pages.component';



@NgModule({
  declarations: [
    SignalsLayoutComponent,
    CounterPageComponent,
    UserinforPageComponent,
    PropertiesPagesComponent
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule
  ]
})
export class SignalsModule { }
