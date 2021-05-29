import { Component, OnInit } from '@angular/core';
import { Work } from 'src/app/Models';
import { FirebaseService } from 'src/app/services/firebase.service';
import { summarize, openInNewTab } from '../../utils/functions';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {
  constructor(private fb: FirebaseService) {}

  works: Work[] = [];
  sum = summarize;
  newTab = openInNewTab;

  ngOnInit(): void {
    this.fb.retrieveWorks().subscribe((data: any) => {
      this.works = data;
      this.works.map((child) => {
        child.categories = child.category.split(', ');
      });
      sessionStorage.setItem('works', JSON.stringify(this.works));
    });
  }
}
