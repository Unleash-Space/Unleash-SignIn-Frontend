import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {
  buttons = [
    { text: 'Work / Study', subOptions: [] },
    { text: 'Maker Space', subOptions: [] },
    { text: 'Unleash Space Tour', subOptions: [] },
    { text: 'Query / ask staff a question', subOptions: [] },
    { text: 'Socialising', subOptions: [] },
    { text: 'Meeting room booking', subOptions: [] },
  ];

  constructor() {}

  ngOnInit(): void {}
}
