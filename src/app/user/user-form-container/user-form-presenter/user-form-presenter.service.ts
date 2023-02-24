import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { user } from '../../user.model';

@Injectable()
export class UserFormPresenterService {

  private userForm: Subject<user>;
  public profileImage: Subject<any>;
  public userForm$: Observable<user>;
  public image_file!: File;
  public baseString!: string;

  constructor(private fb : FormBuilder, private router : Router) {
    this.userForm = new Subject();
    this.userForm$= this.userForm.asObservable();
    this.profileImage = new Subject();
  }

  /**
   * @returns FormGourp
   */
  public buildForm(): FormGroup {
    return this.fb.group({
        firstName: ['', [Validators.required, Validators.maxLength(25), Validators.pattern('^[a-zA-Z]+$')]],
        lastName: ['', [Validators.required, Validators.maxLength(25), Validators.pattern('^[a-zA-Z]+$')]],
        email: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[A-Za-z0-9]([A-Za-z0-9\_\.]*)+@(([A-Za-z0-9-]{2,})+\.)+[A-Za-z\-]{2,4}$/)]],
        status: ['',[Validators.required]],
        profileImage:['']
    });
}
/**
  *convert selected file into base64 string
  * @param event to get file path from event
  */
  public onSelectFile(event: any) {
   this.image_file = event.target.files[0];

   const fileReader = new FileReader();
   fileReader.readAsDataURL(this.image_file);

   fileReader.onload = () => {
     this.baseString = String(fileReader.result);
     this.profileImage.next(this.baseString);
   };
 }

/**
 * sending form to presentation through subject
 * @param saveForm
 */
public saveUserData(saveForm: FormGroup){
  saveForm.controls['profileImage'].setValue(this.baseString)
  this.userForm.next(saveForm.value);
  this.router.navigateByUrl('/user-list')
  console.log(this.baseString);
  // console.log(saveForm);
}

}
