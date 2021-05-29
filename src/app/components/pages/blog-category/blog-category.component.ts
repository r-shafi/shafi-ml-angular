import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPost } from 'src/app/Models';
import { FirebaseService } from 'src/app/services/firebase.service';

import { extractCategory, filterCategories } from '../../utils/functions';

@Component({
  selector: 'app-blog-category',
  templateUrl: './blog-category.component.html',
  styleUrls: ['../blog/blog.component.scss'],
})
export class BlogCategoryComponent implements OnInit {
  constructor(private router: Router, private fb: FirebaseService) {}

  posts: BlogPost[] = [];
  exact: BlogPost[] = []; // filtered posts
  category: string = '';

  ec = extractCategory;

  ngOnInit(): void {
    this.category = this.ec(this.router.url);

    this.posts = JSON.parse(sessionStorage.getItem('posts') || '[]');

    this.exact = this.posts.filter((child) =>
      filterCategories(child, 'tags', this.category)
    );
  }

  sendMeta(meta: any) {
    this.fb.storeLastMeta(meta);
  }
}
