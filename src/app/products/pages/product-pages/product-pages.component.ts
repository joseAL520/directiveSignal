import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-pages',
  templateUrl: './product-pages.component.html',
  styleUrl: './product-pages.component.css'
})
export class ProductPagesComponent {

  private fb = inject( FormBuilder);

  public color: string = 'green';


  public myForm:FormGroup = this.fb.group({
  name:['',[Validators.required,Validators.minLength(6),Validators.email]]
  })


  changeColor(){
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }

  //constructor(private fb:FormBuilder){}

}
