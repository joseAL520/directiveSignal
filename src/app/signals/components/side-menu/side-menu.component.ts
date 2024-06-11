import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

interface MenuItem {
  title:string,
  route:string
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {



  public menuItems: MenuItem[] = [
    
    {title:'Contador',route:'counter'},
    {title:'usuario',route:'user-inf'},
    {title:'Mutaciones',route:'properties'},

  ]
}
