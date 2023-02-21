import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../../user.model';
import { UserListPresnterService } from '../user-list-presenter/user-list-presnter.service';

@Component({
  selector: 'app-user-list-presentation',
  templateUrl: './user-list-presentation.component.html',
  styleUrls: ['./user-list-presentation.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
  viewProviders:[UserListPresnterService]
})
export class UserListPresentationComponent {
  public userList! :  user[];

  constructor(private _router : Router){

  }

  /**
   * setter for getting data
   */
  @Input() public set userData(value: user[] | null) {
    if (value) {
      this.userList = value;
    }
  }
  /**
   * getter for getting data
   */
  public get userData(): user[] {
    return this.userList;
  }
  openForm(){
    this._router.navigateByUrl('/user-form')
  }

  edit(id: number){
    this._router.navigateByUrl(`/edit/${id}`);
  }
}
