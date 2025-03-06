import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterComponent } from '../master/master.component';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent {
  inputType: string = 'text';

  name: string = 'sita';

  selection: string = 'TS';
}
