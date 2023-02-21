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
        firstName: ['', [Validators.required, Validators.maxLength(25), Validators.pattern('^[a-zA-Z]+$')]],
        lastName: ['', [Validators.required, Validators.maxLength(25), Validators.pattern('^[a-zA-Z]+$')]],
        email: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[A-Za-z0-9]([A-Za-z0-9\_\.]*)+@(([A-Za-z0-9-]{2,})+\.)+[A-Za-z\-]{2,4}$/)]],
        status: ['',[Validators.required]]
    });
}

public saveUserData(saveForm: FormGroup){
  this.userForm.next(saveForm.value)
  console.log(saveForm);

}
}
