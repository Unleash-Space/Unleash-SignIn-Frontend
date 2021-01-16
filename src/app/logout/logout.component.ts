import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  cards = [
    { name: 'Etienne Naude', id: 'enau831' },
    { name: 'Hayden Moore', id: 'htmoor' },
    { name: 'Hayden Moore', id: 'htmoor' },
    { name: 'Hayden Moore', id: 'htmoor' },
    { name: 'Hayden Moore', id: 'htmoor' },
    { name: 'Hayden Moore', id: 'htmoor' },
    { name: 'Hayden Moore', id: 'htmoor' },
    { name: 'Hayden Moore', id: 'htmoor' },
    { name: 'Hayden Moore', id: 'htmoor' },
    { name: 'Hayden Moore', id: 'htmoor' },
    { name: 'Hayden Moore', id: 'htmoor' },
  ];

  constructor() {}

  logout(id: any) {
    console.log(id);
  }

  ngOnInit(): void {}
}
