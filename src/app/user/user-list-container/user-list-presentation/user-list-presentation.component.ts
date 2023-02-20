import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { user } from '../../user.model';

@Component({
  selector: 'app-user-list-presentation',
  templateUrl: './user-list-presentation.component.html',
  styleUrls: ['./user-list-presentation.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class UserListPresentationComponent {
  public userList! :  user[];

  @Input() public set userData(value: user[] | null) {
    if (value) {
      this.userList = value;
    }
  }
  public get userData(): user[] {
    return this.userList;
  }
}
