import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GetAllDesignations } from "./get-all-designations";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MasterService {
  constructor(private httpclient: HttpClient) {}

  designations: GetAllDesignations[] = [];

  getdesignations(): Observable<GetAllDesignations> {
    return this.httpclient.get<GetAllDesignations>(
      "https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation"
    );
  }
}
