import { ApiService } from './../api-service/api.service';
import { Component, OnInit } from '@angular/core';

class reason {
  public option: string;
  public optionIndex: number;
  public subReason?: reason[];
}
@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {
  buttons: reason[] = [
    { option: 'Work / Study', optionIndex: 0 },
    { option: 'Maker Space', optionIndex: 1, subReason: [] },
    { option: 'Unleash Space Tour', optionIndex: 2 },
    { option: 'Query / ask staff a question', optionIndex: 3 },
    { option: 'Socialising', optionIndex: 4 },
    { option: 'Meeting room booking', optionIndex: 5 },
  ];

  constructor(public api: ApiService) {}

  async ngOnInit() {
    this.buttons = await this.api.loginOptions();
  }

  // DO THIS
  select(index: number) {
    var option = this.buttons.find((button) => {
      button.optionIndex = index;
    });

    if (option?.subReason) {
      console.log('BRING UP MODAL');
    } else {
    }
  }
}
