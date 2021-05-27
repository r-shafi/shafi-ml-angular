import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/Models';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  constructor(private fb: FirebaseService) {}

  posts: BlogPost[] = [];

  ngOnInit(): void {
    this.fb.retrieveBlogPosts().subscribe((data: any) => {
      this.posts = data;
      data.map((child: any) => {
        child.tags = this.getTags(child.tags);
      });
      this.posts.sort((a, b) => b.date - a.date);
    });
  }

  getTags(str: string) {
    if (!str) {
      return null;
    }
    return str.split(', ');
  }

  sendMeta(meta: any) {
    this.fb.storeLastMeta(meta);
  }
}
