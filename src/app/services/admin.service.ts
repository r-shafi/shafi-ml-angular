import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(
    private db: AngularFireDatabase,
    private router: Router,
    private sb: MatSnackBar
  ) {}

  isAdmin = false;

  login(iName: string, iEmail: string, iPassword: string) {
    this.db
      .object('admin')
      .valueChanges()
      .subscribe((data: any) => {
        const { name, email, password } = data;
        if (name === iName && email === iEmail && password === iPassword) {
          this.isAdmin = true;
          this.router.navigateByUrl('/dashboard');
        } else {
          this.sb.open('Error in Name, Email or Password', undefined, {
            duration: 2000,
          });
        }
      });
  }

  access() {
    return this.isAdmin;
  }
}
