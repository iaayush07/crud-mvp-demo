import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DndFileUploadComponent } from './dnd-file-upload.component';
import { FileUploadContainerComponent } from './file-upload-container/file-upload-container.component';

const routes: Routes = [
  { path: '',
   component: DndFileUploadComponent,
   children:[
    {
      path: '',
      pathMatch: 'full',
      redirectTo : 'file-upload'
    },
    {
      path : 'file-upload',
      component : FileUploadContainerComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DndFileUploadRoutingModule { }
