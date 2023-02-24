import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DndFileUploadRoutingModule } from './dnd-file-upload-routing.module';
import { DndFileUploadComponent } from './dnd-file-upload.component';
import { FileUploadContainerComponent } from './file-upload-container/file-upload-container.component';
import { FileUploadPresentationComponent } from './file-upload-container/file-upload-presentation/file-upload-presentation.component';
import { DndfileDirective } from './Directive/dndfile.directive';
import { UploadFileService } from './Services/upload-file.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DndFileUploadComponent,
    FileUploadContainerComponent,
    FileUploadPresentationComponent,
    DndfileDirective
  ],
  imports: [
    CommonModule,
    DndFileUploadRoutingModule,
    HttpClientModule
  ],
  providers: [
    UploadFileService
  ]
})
export class DndFileUploadModule { }
