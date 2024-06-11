import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { UsersServiceService } from '../../services/users-service.service';
import { User } from '../../interfaces/user-request.interfaces';

@Component({
  selector: 'app-userinfor-page',
  templateUrl: './userinfor-page.component.html',
  styleUrl: './userinfor-page.component.css'
})
export class UserinforPageComponent  implements OnInit{


  private userServices = inject(UsersServiceService);
  public userId = signal(1);

  public currentUser = signal<User | undefined>( undefined);
  public userWasFound = signal(true);
  public fullName = computed<string>( () => {
    if( !this.currentUser())  return 'Usuario no Encotrado';
    return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`;
  });


  ngOnInit(): void {
    this.loadUser( this.userId() );
  }


  loadUser(id:number){

    if(id<=0)return
    this.userId.set(id);
    this.currentUser.set(undefined);

    this.userServices.getuserById(id)
      .subscribe({
        next: (value) => {
          this.currentUser.set( value );
          this.userWasFound.set(true)
        },
        error: () => {
          this.userWasFound.set(false);
          this.currentUser.set(undefined);
        },
          
          
      })
  }


}
