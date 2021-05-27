import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private admin: AdminService, private sb: MatSnackBar) {}

  user = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {}

  login() {
    const { name, email, password } = this.user.value;

    if (name && email && password) {
      this.admin.login(name, email, password);
    } else {
      return;
    }
  }
}
