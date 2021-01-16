import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Unleash';
  page = 'in';
  selectedClicked = false;
  textDisplay = 'WooW';

  logout() {
    this.page = 'out';
  }
  login() {
    this.page = 'in';
  }
}
