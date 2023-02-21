import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { user } from '../user.model';

@Component({
  selector: 'app-user-form-container',
  templateUrl: './user-form-container.component.html',
  styleUrls: ['./user-form-container.component.scss']
})
export class UserFormContainerComponent {

  constructor(private mainUserService : UserService){

  }

  public addUser(user: user){
    this.mainUserService.addUserData(user).subscribe((res:user)=>{
      console.log(res);
    })
  }
}
