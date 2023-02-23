import { ChangeDetectionStrategy,ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { user } from '../../user.model';
import { UserFormPresenterService } from '../user-form-presenter/user-form-presenter.service';

@Component({
  selector: 'app-user-form-presentation',
  templateUrl: './user-form-presentation.component.html',
  styleUrls: ['./user-form-presentation.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
  viewProviders:[UserFormPresenterService]
})
export class UserFormPresentationComponent implements OnInit{


  @Input() public set editUser(value: user | null) {
    if(value){
      this.userPresentationForm.patchValue(value);
      this._value = value;
    }
  }
  public get value(){
    return this._value;
  }
  @Output() public submitData: EventEmitter<user>;
  @Output() public edittedData: EventEmitter<user>;
  public userPresentationForm : FormGroup;
  public isSubmited : boolean;
  public _value : any;
  public base64! : string;

  constructor(private userformPresenterService : UserFormPresenterService, private _changeDetector : ChangeDetectorRef){
    this.userPresentationForm = this.userformPresenterService.buildForm();

    this.submitData = new EventEmitter();
    this.edittedData = new EventEmitter();
    this.isSubmited=false;
  }

  ngOnInit(): void {
    /**
     * emiting data through output
     */
    this.userformPresenterService.userForm$.subscribe((res:user)=>{
      // console.log(res);
      if(this.value){
        this.edittedData.emit(res);
      }else{
        this.submitData.emit(res);
      }
    });

  }

   // geter function
   get validator(): { [key: string]: AbstractControl<any> } {
    return this.userPresentationForm.controls;
  }

  /**
   * submit data
   */
  submitForm(){
    this.isSubmited = true;
    this.userformPresenterService.saveUserData(this.userPresentationForm);
    // console.log(this.userPresentationForm);
  }

  onFileSelect(event: any) {
    this.userformPresenterService.onSelectFile(event);
    const b = this.userformPresenterService.baseString;
    this.userformPresenterService.profileImage.subscribe((res) => {
      this._changeDetector.markForCheck();
      this.base64 = res;
    });
  }
}
