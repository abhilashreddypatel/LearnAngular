import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MasterComponent } from './components/master/master.component';
import { RolesComponent } from './components/roles/roles.component';
import { DesignationComponent } from './components/designation/designation.component';
import { FilterpipesComponent } from './components/filterpipes/filterpipes.component';

export const routes: Routes = [
  { path: '', redirectTo: 'app-master', pathMatch: 'full' },
  { path: 'app-master', component: MasterComponent },
  { path: 'app-roles', component: RolesComponent },
  { path: 'app-designation', component: DesignationComponent },
  { path: 'app-filterpipes', component: FilterpipesComponent },
];
