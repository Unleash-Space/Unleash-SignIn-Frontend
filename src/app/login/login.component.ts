import { ModalComponent } from './../modal/modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../api-service/api.service';

class reason {
  public option: string;
  public index: number;
  public subReason?: reason[];
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  disabled = false;
  stage = 2;
  selectFailed = '';
  numFailed = '';
  buttons: reason[] = [
    { option: 'Work / Study', index: 0 },
    {
      option: 'Maker Space',
      index: 1,
      subReason: [
        { option: 'Equipment training', index: 6 },
        { option: 'A personal project', index: 7 },
        { option: 'An upskilling project', index: 8 },
        { option: 'An entrepreneurial project or prototype', index: 9 },
      ],
    },
    { option: 'Unleash Space Tour', index: 2 },
    { option: 'Query / ask staff a question', index: 3 },
    { option: 'Socialising', index: 4 },
    { option: 'Meeting room booking', index: 5 },
  ];
  selected = '';
  id = '';
  constructor(public dialog: MatDialog, public api: ApiService) {}

  async ngOnInit() {
    // this.buttons = await this.api.loginOptions();
  }

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
    this.numFailed = 'Hi please check your ID or UPI';
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

  openDialog(option: reason): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
      height: '600px',
      data: option.subReason,
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
  // DO THIS
  select(index: number) {
    var option = this.buttons.find((button) => {
      button.index = index;
    });

    if (option?.subReason) {
      console.log('BRING UP MODAL');
    } else {
    }
  }
}
