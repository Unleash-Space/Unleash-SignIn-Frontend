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

  next() {
    const id = <HTMLInputElement>document.getElementById('ID');
    const reason = <HTMLSelectElement>document.getElementById('reason');
    var fail = false;
    if (!id.checkValidity()) {
      this.numFailed = 'no-num';
      fail = true;
      return;
    } else {
      this.numFailed = '';
    }
    if (this.selected == '') {
      fail = true;

      this.selectFailed = 'no-select';
      return;
    } else {
      this.selectFailed = '';
    }

    if (!fail) {
      console.log(this.selected, id.value);
      var json = { reason: this.selected, id: id.value };
    }
  }

  ngOnInit(): void {
    // this.reason = <HTMLSelectElement>document.getElementById('reason');
  }
}
