import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/Models';
import { FirebaseService } from 'src/app/services/firebase.service';
import { stringToArray } from '../../utils/functions';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  constructor(private fb: FirebaseService) {}

  posts: BlogPost[] = [];
  s2a = stringToArray;

  ngOnInit(): void {
    this.fb.retrieveBlogPosts().subscribe((data: any) => {
      this.posts = data;
      data.map((child: any) => {
        child.tags = this.s2a(child.tags);
      });
      this.posts.sort((a, b) => b.date - a.date);
      sessionStorage.setItem('posts', JSON.stringify(this.posts));
    });
  }

  sendMeta(meta: any) {
    this.fb.storeLastMeta(meta);
  }
}
