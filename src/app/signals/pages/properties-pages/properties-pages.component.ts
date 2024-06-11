import { Component, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interfaces';

@Component({
  selector: 'app-properties-pages',
  templateUrl: './properties-pages.component.html',
  styleUrl: './properties-pages.component.css'
})
export class PropertiesPagesComponent {

  public user = signal<User>({
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg"
  })

  onFieldUpdate(field:keyof User, value:string){

   this.user.update( curret => {

    switch(field){
      case 'email':
        curret.email = value;
        break
      case 'avatar':
        curret.avatar = value;
        break
      case 'first_name':
        curret.first_name = value;
        break

      case 'last_name':
        curret.last_name = value;
        break
      case 'id':
        curret.id = Number(value);
        
    }

    return curret;

   } )

  }

}
