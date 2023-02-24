import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  { path: 'dnd-file-upload', loadChildren: () => import('./dnd-file-upload/dnd-file-upload.module').then(m => m.DndFileUploadModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
