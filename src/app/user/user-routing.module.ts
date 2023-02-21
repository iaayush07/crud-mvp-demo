import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormContainerComponent } from './user-form-container/user-form-container.component';
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
    },
    {
      path : 'user-form',
      component : UserFormContainerComponent
    },{
      path: 'edit/:id',
      component: UserFormContainerComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
