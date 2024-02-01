import { Routes } from '@angular/router';
import { PathSetComponent } from './path-set/path-set.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

export const routes: Routes = [
    {path: 'path-set', component: PathSetComponent},
    {path: 'file-upload', component: FileUploadComponent},
];
