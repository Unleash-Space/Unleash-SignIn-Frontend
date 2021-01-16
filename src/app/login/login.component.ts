import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  reasons = [
    {
      id: 1,
      reason: 'Personal Project',
    },
    {
      id: 2,
      reason: 'Shift',
    },
    {
      id: 3,
      reason: 'Socializing',
    },
    {
      id: 4,
      reason: 'Helping Someone out',
    },
  ];
  disabled = false;
  selectFailed = '';
  numFailed = '';

  constructor() {}
  selected = '';

  validateID() {
    const upiReg = /[a-zA-Z][a-zA-Z][a-zA-Z]?[a-zA-Z]?\d\d\d/;
    const idReg = /\d\d\d\d\d\d\d/;
    const id = <HTMLInputElement>document.getElementById('ID');

    if (!id.checkValidity()) {
      this.numFailed = 'This is Question is Required';
      return false;
    } else {
      if (!isNaN(+id.value) && (id.value.length == 7 || id.value.length == 9)) {
        console.log('valid ID');
        this.numFailed = '';
        return true;
      }
      if (upiReg.test(id.value)) {
        console.log('valid UPI');
        this.numFailed = '';
        return true;
      }
    }
    this.numFailed = 'IDIOT! Thats not a valid ID or UPI';
    return false;
  }

  next() {
    const id = <HTMLInputElement>document.getElementById('ID');
    const reason = <HTMLSelectElement>document.getElementById('reason');
    var fail = false;
    fail = !this.validateID();
    if (this.selected == '') {
      fail = true;

      this.selectFailed = 'Please tell us why you are coming in today';
      return;
    } else {
      this.selectFailed = '';
    }

    if (!fail) {
      console.log(this.selected, id.value);
      var json = { reason: this.selected, id: id.value };
    }
  }

  ngOnInit(): void {}
}
