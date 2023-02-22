import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UserService } from '../service/user.service';
import { user } from '../user.model';

@Component({
  selector: 'app-user-list-container',
  templateUrl: './user-list-container.component.html',
  styleUrls: ['./user-list-container.component.scss']
})
export class UserListContainerComponent implements OnInit{

  public userData$ : Observable<user[]>

  constructor(private userService : UserService){
    this.userData$ = new Observable();
  }
  ngOnInit(): void {
    this.userData$= this.userService.getUserData();
  }

  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe(res=>{
      if(res){
        this.userData$= this.userService.getUserData();
      }
    })
  }
}
