import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private db: AngularFireDatabase) {}

  private lastMetaHolder: any = JSON.parse(
    localStorage.getItem('meta') || '{}'
  );

  retrieveBlogPosts() {
    return this.db.list('blog').valueChanges();
  }

  retrieveBlogPostContent(url: string) {
    return this.db.list(`post-content/${url}`).valueChanges();
  }

  storeLastMeta(metaObject: any) {
    localStorage.setItem('meta', JSON.stringify(metaObject));
    this.lastMetaHolder = metaObject;
  }

  retrieveLastMeta() {
    return this.lastMetaHolder;
  }

  retrieveWorks() {
    return this.db.list('works').valueChanges();
  }

  createNewBlog(blogObject: any) {
    this.db.list('blog').push(blogObject);
  }

  createPostContent(slug: string, content: any) {
    this.db.list(`post-content/${slug}`).push(content);
  }

  deletePostContent(slug: string) {
    this.db.object(`post-content/${slug}`).remove();
  }

  saveWork(work: any) {
    this.db.list('works').push(work);
  }

  blogDataForDeletion() {
    return this.db.object('blog').valueChanges();
  }

  deleteBlogPost(key: string) {
    this.db.list('blog').remove(key);
  }
}
