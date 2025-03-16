import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-post",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: "./post.component.html",
  styleUrl: "./post.component.css",
})
export class PostComponent implements OnInit {
  constructor(private http: HttpClient) {}
  postForm!: FormGroup;

  url = "https://vlogsite-15eba-default-rtdb.firebaseio.com/posts.json";

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl("", Validators.required),
      Content: new FormControl("", Validators.required),
    });
  }

  createpost() {
    console.log(this.postForm.value);
    this.http.post(this.url, this.postForm.value).subscribe((res) => {
      console.log(res + "create");
    });
  }

  getposts() {
    this.http.get(this.url).subscribe((data) => {
      return console.log(data + "getting");
    });
  }

  deletepost() {
    this.http.delete(this.url).subscribe((data) => {
      console.log(data + "del");
    });
  }
}
