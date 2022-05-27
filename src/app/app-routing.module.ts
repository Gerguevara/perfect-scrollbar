import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustoFileUploadComponent } from './custo-file-upload/custo-file-upload.component';

const routes: Routes = [
  {
    component: CustoFileUploadComponent,
    path: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
