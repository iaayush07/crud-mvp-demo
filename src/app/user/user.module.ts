import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserFormContainerComponent } from './user-form-container/user-form-container.component';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { UserDetailsContainerComponent } from './user-details-container/user-details-container.component';
import { UserFormPresentationComponent } from './user-form-container/user-form-presentation/user-form-presentation.component';
import { UserListPresentationComponent } from './user-list-container/user-list-presentation/user-list-presentation.component';
import { UserDetailsPresentationComponent } from './user-details-container/user-details-presentation/user-details-presentation.component';


@NgModule({
  declarations: [
    UserComponent,
    UserFormContainerComponent,
    UserListContainerComponent,
    UserDetailsContainerComponent,
    UserFormPresentationComponent,
    UserListPresentationComponent,
    UserDetailsPresentationComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
