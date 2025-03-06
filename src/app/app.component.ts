import { Component } from '@angular/core';
import { RolesComponent } from './components/roles/roles.component';
import { MasterComponent } from './components/master/master.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [MasterComponent],
})
export class AppComponent {
  title = 'LearnAngular';
}
