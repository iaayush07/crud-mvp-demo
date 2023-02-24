import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { File } from '../file.model';
import { UploadFileService } from '../Services/upload-file.service';

@Component({
  selector: 'app-file-upload-container',
  templateUrl: './file-upload-container.component.html',
  styleUrls: ['./file-upload-container.component.scss']
})
export class FileUploadContainerComponent {

  public filesList$: Observable<File[]>

  constructor(private uploadFileService: UploadFileService) {
    this.filesList$ = new Observable<File[]>();
  }

  ngOnInit(): void {
    this.filesList$ = this.uploadFileService.getFiles();
  }
  addFile(file: File) {
    this.filesList$.subscribe({
      next: (list) => {
        let isFile = list.find((res) => {
          return res.fileName === file.fileName
        })
        if (isFile) {
          alert('Duplicate File');
        }
        else {
          this.UploadFile(file)
        }
      }
    })
  }


  UploadFile(file: File) {
    this.uploadFileService.addFiles(file).subscribe({
      next: () => {
        alert("File Added Successfully");
        this.filesList$ = this.uploadFileService.getFiles();
      },
      error: (e) => { console.log(e) }
    })
  }
  DeleteFile(id: number) {
    this.uploadFileService.deleteFiles(id).subscribe(() => {
      alert("File " + id + " is Deleted");
      this.filesList$ = this.uploadFileService.getFiles()
    })
  }

}
