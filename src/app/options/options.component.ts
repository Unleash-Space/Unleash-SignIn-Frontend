import { ApiService } from './../api-service/api.service';
import { Component, OnInit } from '@angular/core';

class reason {
  public option: string;
  public index: number;
  public subReason?: reason[];
}
@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {
  buttons: reason[] = [
    { option: 'Work / Study', index: 0 },
    { option: 'Maker Space', index: 1, subReason: [] },
    { option: 'Unleash Space Tour', index: 2 },
    { option: 'Query / ask staff a question', index: 3 },
    { option: 'Socialising', index: 4 },
    { option: 'Meeting room booking', index: 5 },
  ];

  constructor(public api: ApiService) {}

  async ngOnInit() {
    this.buttons = await this.api.loginOptions();
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
