import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { UserinforPageComponent } from './pages/userinfor-page/userinfor-page.component';
import { PropertiesPagesComponent } from './pages/properties-pages/properties-pages.component';

const routes: Routes = [
  {
    path:'',
    component: SignalsLayoutComponent,
    children:[
        {path:'counter',component:CounterPageComponent},
        {path:'user-inf',component:UserinforPageComponent},
        {path:'properties',component:PropertiesPagesComponent},
        {path:'**',redirectTo:'counter'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalsRoutingModule { }
