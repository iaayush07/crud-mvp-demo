import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { File } from '../../file.model';

@Injectable()
export class FileUploadPresenterService {

  // private files:MyFile;
  private fileUpload: Subject<File>;
  public fileUpload$: Observable<File>;

  constructor() {


    this.fileUpload = new Subject<File>();
    this.fileUpload$ = new Observable<File>();
    this.fileUpload$ = this.fileUpload.asObservable();
  }

  uploadFile(file: FileList) {


    console.log(file);

    for (let i = 0; i < file.length; i++) {
      const files: File = {} as File;
      let size = Math.round(file[i].size / 1024 / 1024)
      if (size <= 2) {
        // debugger

        // file reader to read file content
        const reader = new FileReader();
        // read as url to get based64 type data
        reader.readAsDataURL(file[i]);
        reader.onload = (event) => {
          files.fileName = file[i].name;
          // console.log(files.name);

          files.fileSize = size * 1024 * 1024;
          files.fileType = file[i].type;
          files.file = event.target?.result as string;
          // console.log(files, "yo")
          this.fileUpload.next(files);
        }
      }

      else if (file[i].type != "image/jpeg") {
        alert("Please upload in right format");
      }
      else {
        alert("File Size is greater than 2MB");
      }
    }
  }
}
