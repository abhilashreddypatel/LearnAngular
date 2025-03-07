import { HttpClient } from "@angular/common/http";
import { Component, inject, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { GetAllRoles } from "../get-all-roles";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-roles",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./roles.component.html",
  styleUrl: "./roles.component.css",
})
export class RolesComponent implements OnInit {
  inputType: string = "text";
  name: string = "sita";
  selection: string = "TS";

  httpclient = inject(HttpClient);

  values: GetAllRoles[] = [];

  ngOnInit(): void {
    this.getallroles();
  }

  getallroles() {
    this.httpclient
      .get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles")
      .subscribe((data: any) => {
        this.values = data.data;
      });
  }
}
