import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Work } from 'src/app/Models';

import {
  openInNewTab,
  summarize,
  extractCategory,
  filterCategories,
} from '../../utils/functions';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['../works/works.component.scss'],
})
export class CategoryComponent implements OnInit {
  constructor(private router: Router) {}

  works: Work[] = [];
  specificWorks: Work[] = [];
  category: string = '';

  sum = summarize;
  newTab = openInNewTab;

  ngOnInit(): void {
    this.category = extractCategory(this.router.url);
    this.works = JSON.parse(sessionStorage.getItem('works') || '[]');
    this.specificWorks = this.works.filter((child) =>
      filterCategories(child, 'categories', this.category)
    );

    this.router.events.subscribe(() => {
      this.category = extractCategory(this.router.url);
      this.works = JSON.parse(sessionStorage.getItem('works') || '[]');
      this.specificWorks = this.works.filter((child) =>
        filterCategories(child, 'categories', this.category)
      );
    });
  }
}
