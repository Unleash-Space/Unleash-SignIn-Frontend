import { ModalComponent } from './../modal/modal.component';
import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  disabled = false;
  stage = 1;
  selectFailed = '';
  numFailed = '';
  buttons = [
    { text: 'Work / Study', subOptions: [] },
    {
      text: 'Maker Space',
      subOptions: [
        'Equipment training',
        'A personal project',
        'An upskilling project',
        'An entrepreneurial project or prototype',
      ],
    },
    { text: 'Unleash Space Tour', subOptions: [] },
    { text: 'Query / ask staff a question', subOptions: [] },
    { text: 'Socialising', subOptions: [] },
    { text: 'Meeting room booking', subOptions: [] },
  ];
  selected = '';
  id = '';
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  validateID() {
    const upiReg = /[a-zA-Z][a-zA-Z][a-zA-Z]?[a-zA-Z]?\d\d\d/;
    const idReg = /\d\d\d\d\d\d\d/;
    var id = <HTMLInputElement>document.getElementById('ID');

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
    this.id = (<HTMLInputElement>document.getElementById('ID')).value;
    const reason = <HTMLSelectElement>document.getElementById('reason');
    var fail = false;
    fail = !this.validateID();

    if (!fail) {
      console.log(this.id);
      var json = { reason: this.selected, id: this.id };
      this.stage = 2;
    }
  }

  submit(reason: string) {
    var json = { reason: reason, id: this.id };
    //call API here
    this.stage = 1;
    console.log(json);
  }

  openDialog(ref: number): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
      height: '600px',
      data: { question: '', answer: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      var json = { reason: result, id: this.id };
      console.log(json);
      if (result != undefined) this.stage = 1;
    });
  }

  fade(element: any) {
    var op = 1; // initial opacity
    var timer = setInterval(function () {
      if (op <= 0.1) {
        clearInterval(timer);
        element.style.display = 'none';
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ')';
      op -= op * 0.1;
    }, 20);
  }
}
