import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Unleash';
  page = 'out';

  logout() {
    this.page = 'out';
  }
  login() {
    this.page = 'in';
  }
}
