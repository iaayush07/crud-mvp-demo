import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: '',
  component: UserComponent,
  children : [
    {
      path: '',
      pathMatch: 'full',
      redirectTo : 'user-list'
    },
    {
      path : 'user-list',
      component : UserListContainerComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
