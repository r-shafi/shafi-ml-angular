import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as marked from 'marked';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(private router: Router, private fb: FirebaseService) {}

  meta: any;
  content: any;

  ngOnInit(): void {
    const id = this.router.url.split('/blog/')[1];

    this.fb.retrieveBlogPostContent(id).subscribe((data: any) => {
      this.content = marked(data[0]);
    });

    this.meta = this.fb.retrieveLastMeta();
  }
}
