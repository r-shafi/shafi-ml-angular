import { Component } from '@angular/core';
// import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // constructor(private db: AngularFireDatabase) {}
  // ngOnInit(): void {}
  // newPost = {
  //   content: 'TEST FROM LOCALHOST',
  //   date: '19-05-2021',
  //   description: 'TEST DESCRIPTION',
  //   slug: '/test',
  //   tags: 'VSCODE, ANGULAR, TYPESCRIPT',
  //   title: 'VSCODE, ANGULAR, TYPESCRIPT',
  // };
  // ngOnInit() {
  //   this.db
  //     .object('blog')
  //     .valueChanges()
  //     .subscribe((data) => console.log(data));
  // }
  // saveNewPost() {
  //   this.db.object('blog').set(this.newPost);
  // }
}
