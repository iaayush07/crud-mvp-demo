import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserFormContainerComponent } from './user-form-container/user-form-container.component';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { UserFormPresentationComponent } from './user-form-container/user-form-presentation/user-form-presentation.component';
import { UserListPresentationComponent } from './user-list-container/user-list-presentation/user-list-presentation.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserFormPresenterService } from './user-form-container/user-form-presenter/user-form-presenter.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UserComponent,
    UserFormContainerComponent,
    UserListContainerComponent,
    UserFormPresentationComponent,
    UserListPresentationComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgbDropdownModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers:[
    UserService
  ]
})
export class UserModule { }
