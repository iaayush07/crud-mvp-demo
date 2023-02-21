import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { user } from '../../user.model';

@Injectable()
export class UserFormPresenterService {

  private userForm: Subject<user>
  public userForm$: Observable<user>

  constructor(private fb : FormBuilder) {
    this.userForm = new Subject();
    this.userForm$= this.userForm.asObservable();
  }

  public buildForm(): FormGroup {
    return this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required]],
        status: ['']
    });
}

public saveUserData(saveForm: FormGroup){
  this.userForm.next(saveForm.value)
  console.log(saveForm);

}
}
