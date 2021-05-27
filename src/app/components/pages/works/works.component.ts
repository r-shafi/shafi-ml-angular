import { Component, OnInit } from '@angular/core';
import { Work } from 'src/app/Models';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {
  constructor(private fb: FirebaseService) {}

  works: Work[] = [];

  ngOnInit(): void {
    this.fb.retrieveWorks().subscribe((data: any) => {
      this.works = data;
      this.works.map((child) => {
        child.categories = child.category.split(', ');
      });
    });
  }

  openInNewTab(url: string) {
    window.open(url, '_blank');
  }
}
