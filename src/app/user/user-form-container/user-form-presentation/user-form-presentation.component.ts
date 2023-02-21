import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { user } from '../../user.model';
import { UserFormPresenterService } from '../user-form-presenter/user-form-presenter.service';

@Component({
  selector: 'app-user-form-presentation',
  templateUrl: './user-form-presentation.component.html',
  styleUrls: ['./user-form-presentation.component.scss']
})
export class UserFormPresentationComponent implements OnInit{

  @Output() public submitData: EventEmitter<user>;
  @Output() public edittedData: EventEmitter<user>;
  public userPresentationForm : FormGroup;

  constructor(private userformPresenterService : UserFormPresenterService){
    this.userPresentationForm = this.userformPresenterService.buildForm();

    this.submitData = new EventEmitter();
    this.edittedData = new EventEmitter();
  }

  ngOnInit(): void {
    this.userformPresenterService.userForm$.subscribe((res:user)=>{
      console.log(res);

      this.submitData.emit(res);
    });
  }

  submitForm(){
    this.userformPresenterService.saveUserData(this.userPresentationForm);
    console.log(this.userPresentationForm);
  }
}
