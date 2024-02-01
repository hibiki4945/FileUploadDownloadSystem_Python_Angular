import { Component } from '@angular/core';
import { TrashCanTableModule } from '../Table/TrashCan/usersTable.module';

@Component({
  selector: 'app-trash',
  standalone: true,
  imports: [
    TrashCanTableModule,],
  templateUrl: './trash.component.html',
  styleUrl: './trash.component.css'
})
export class TrashComponent {

}
