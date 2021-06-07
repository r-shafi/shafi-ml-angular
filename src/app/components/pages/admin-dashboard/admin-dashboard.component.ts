import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  constructor(private fb: FirebaseService, private sb: MatSnackBar) {}

  blog = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    slug: new FormControl(''),
    tags: new FormControl(''),
  });

  work = new FormGroup({
    name: new FormControl(''),
    url: new FormControl(''),
    category: new FormControl(''),
    description: new FormControl(''),
  });

  postContent = new FormControl('');

  blogContent: any;
  blogContentKeys: any;

  ngOnInit(): void {
    this.fb.blogDataForDeletion().subscribe((data) => {
      this.blogContent = data;
      this.blogContentKeys = Object.keys(this.blogContent);
    });
  }

  createSlug() {
    let { title } = this.blog.value;

    if (!title) {
      return;
    }

    title = title.match(/[a-z0-9 ]/gi).join('');

    this.blog.value.slug = title.toLowerCase().trim().split(' ').join('-');

    this.blog.controls['slug'].setValue(this.blog.value.slug);
  }

  post() {
    if (this.blog.invalid || this.postContent.invalid) {
      return;
    }

    let { title, description, slug, tags } = this.blog.value;

    const blog = {
      title,
      description,
      slug,
      tags,
      date: Date.now(),
    };

    this.fb.createNewBlog(blog);
    this.fb.createPostContent(slug, this.postContent.value);

    this.blog.reset();
    this.postContent.reset();

    this.sb.open('Post Created Successfully!', undefined, {
      duration: 2000,
    });
  }

  saveWork() {
    if (this.work.invalid) {
      return;
    }

    this.fb.saveWork(this.work.value);

    this.work.reset();

    this.sb.open('New work added!', undefined, {
      duration: 2000,
    });
  }

  delete(key: string) {
    // todo: add a mat-dialog confirmation

    this.fb.deleteBlogPost(key);
    this.fb.deletePostContent(this.blogContent[key].slug);
  }
}
