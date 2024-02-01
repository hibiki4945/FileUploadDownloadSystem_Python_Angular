import { Component } from '@angular/core';
import { DataTableModule } from '../Table/Data/usersTable.module';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [
    DataTableModule,],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {

}
