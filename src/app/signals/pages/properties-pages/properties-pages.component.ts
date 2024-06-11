import { Component } from '@angular/core';

@Component({
  selector: 'app-properties-pages',
  templateUrl: './properties-pages.component.html',
  styleUrl: './properties-pages.component.css'
})
export class PropertiesPagesComponent {


  onFieldUpdate(field:string, value:string){

    console.log({field, value})

  }

}
