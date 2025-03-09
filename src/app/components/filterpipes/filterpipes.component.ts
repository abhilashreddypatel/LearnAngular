import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FilterPipe } from "../../pipes/filter.pipe";
import { interval, Observable, Observer, Subscription } from "rxjs";

@Component({
  selector: "app-filterpipes",
  standalone: true,
  imports: [CommonModule, FormsModule, FilterPipe],
  templateUrl: "./filterpipes.component.html",
  styleUrl: "./filterpipes.component.css",
})
export class FilterpipesComponent implements OnInit, OnDestroy {
  obssub!: Subscription;
  obssub1!: Subscription;

  customobs = Observable.create((observer: any) => {
    let value = 0;
    setInterval(() => {
      observer.next(value);
      value++;
      if (value > 5) {
        observer.error("Error in template");
      }
      if (value > 4) {
        observer.Complete();
      }
    }, 1000);
  });
  ngOnInit(): void {
    // this.clickme();
    this.obssub1 = this.customobs.subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        console.log("Complete");
      }
    );
  }

  ngOnDestroy(): void {
    // this.obssub.unsubscribe();
    this.obssub1.unsubscribe();
  }

  users = [
    { name: "leela", joinedDate: new Date(21, 5, 1999) },
    { name: "meela", joinedDate: new Date(21, 6, 1999) },
    { name: "keela", joinedDate: new Date(21, 7, 1999) },
  ];

  data: string = "";

  addme() {
    this.users.push({ name: "Sample", joinedDate: new Date(1, 1, 2000) });
  }

  clickme() {
    this.obssub = interval(1000).subscribe((data) => {
      console.log(data);
    });
  }
}
