import { Component, OnInit } from "@angular/core";
import { MasterService } from "../master.service";
import { GetAllDesignations } from "../get-all-designations";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { IDesignation } from "../get-all-roles";

@Component({
  selector: "app-designation",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./designation.component.html",
  styleUrl: "./designation.component.css",
})
export class DesignationComponent implements OnInit {
  designations: IDesignation[] = [];
  constructor(private masterservice: MasterService, private http: HttpClient) {}

  ngOnInit() {
    this.masterservice
      .getdesignations()
      .subscribe((data: GetAllDesignations) => {
        this.designations = data.data;
      });
  }
}
