import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { FileUploadPresenterService } from '../file-upload-presenter/file-upload-presenter.service';

@Component({
  selector: 'app-file-upload-presentation',
  templateUrl: './file-upload-presentation.component.html',
  styleUrls: ['./file-upload-presentation.component.scss'],

  viewProviders: [FileUploadPresenterService]
})
export class FileUploadPresentationComponent {
  public file!: FileList;
  public startDate!: string;
  public endDate!: string;

  @Output() fileUpload: EventEmitter<any>;

  constructor(private fileUploadPrensenter: FileUploadPresenterService, private cdr: ChangeDetectorRef) {
    this.fileUpload = new EventEmitter<any>();
  }


  ngOnInit(): void {
    this.fileUploadPrensenter.fileUpload$.subscribe((file: any) => {
      this.fileUpload.emit(file);
    })
  }

  readFile(files: any) {

    this.file = files.files;
    console.log(files, 'fhgh');
  }

  uploadFile() {
    if (this.file) {
      this.fileUploadPrensenter.uploadFile(this.file)
      // console.log(this.file , "yo")
    }
    else {
      alert("No File is Selected")
    }
  }
}
