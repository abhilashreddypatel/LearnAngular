import { Component } from "@angular/core";
import { RolesComponent } from "../roles/roles.component";
import { DesignationComponent } from "../designation/designation.component";
import { CommonModule } from "@angular/common";
import { FilterpipesComponent } from "../filterpipes/filterpipes.component";

@Component({
  selector: "app-master",
  standalone: true,
  imports: [
    RolesComponent,
    CommonModule,
    DesignationComponent,
    FilterpipesComponent,
  ],
  templateUrl: "./master.component.html",
  styleUrl: "./master.component.css",
})
export class MasterComponent {
  currentComponent: string = "";

  switchcomp(current: string) {
    this.currentComponent = current;
  }
}
