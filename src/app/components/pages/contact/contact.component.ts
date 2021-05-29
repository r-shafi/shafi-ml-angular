import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { validateEmail } from '../../utils/functions';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  message = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    msg: new FormControl(''),
  });

  constructor(private sb: MatSnackBar) {}

  ngOnInit(): void {}

  send() {
    const endPoint =
      'https://getform.io/f/41699d4b-d123-4239-929b-5612601d261f';

    if (this.message.invalid) {
      this.sb.open('Please Fix The Error(s) and Try Again', undefined, {
        duration: 2000,
      });
      return;
    }
    if (!validateEmail(this.message.value.email)) {
      this.sb.open('Please Enter a Valid Email Address', undefined, {
        duration: 2000,
      });

      return;
    }

    const formData = new FormData();

    Object.keys(this.message.value).map((key) =>
      formData.append(key, this.message.value[key])
    );

    fetch(endPoint, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        this.message.reset();
        this.sb.open('Message Sent Successfully!', undefined, {
          duration: 3000,
        });
      })
      .catch((error) => console.log(error));
  }
}
