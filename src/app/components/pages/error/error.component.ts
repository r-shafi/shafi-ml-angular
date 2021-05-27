import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.error('🔴 You are trying to access a page that does not exist!');
  }
}
