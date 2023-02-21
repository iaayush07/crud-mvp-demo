import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';
import { user } from '../user.model';

@Component({
  selector: 'app-user-form-container',
  templateUrl: './user-form-container.component.html',
  styleUrls: ['./user-form-container.component.scss']
})
export class UserFormContainerComponent {

  public id : number;
  public edituser$ : Observable<user>

  constructor(private mainUserService : UserService, private router: ActivatedRoute){
    this.id =this.router.snapshot.params['id'];
    this.edituser$ = this.mainUserService.getUserById(this.id);
  }

  /**
   * post call
   * @param user
   */
  public addUser(user: user){
    this.mainUserService.addUserData(user).subscribe((res:user)=>{
      console.log(res);
    })
  }

  public editUser(user: user ){
    this.mainUserService.edditedData(user,this.id).subscribe((res:user)=>{
      console.log(res);
    })
  }
}
