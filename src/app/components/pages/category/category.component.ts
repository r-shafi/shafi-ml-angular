import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Work } from 'src/app/Models';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  constructor(private fb: FirebaseService, private router: Router) {}

  specificWorks: Work[] = [];

  // TODO: use session storage to lighten some burden

  ngOnInit(): void {
    const category = this.router.url.split('/works/')[1];

    this.fb.retrieveWorks().subscribe((data: any) => {
      this.specificWorks = data.filter((child: any) =>
        child.category.includes(category)
      );
    });
  }
}
