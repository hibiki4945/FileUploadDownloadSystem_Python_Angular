import { Routes } from '@angular/router';
import { PathSetComponent } from './path-set/path-set.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DataComponent } from './data/data.component';
import { TrashComponent } from './trash/trash.component';

export const routes: Routes = [
    {path: '', redirectTo: 'data', pathMatch: 'full'},
    {path: 'path-set', component: PathSetComponent},
    {path: 'file-upload', component: FileUploadComponent},
    {path: 'data', component: DataComponent},
    {path: 'trash', component: TrashComponent},
];
