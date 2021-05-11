import { ApiService } from './../api-service/api.service';
import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  options = [
    'Equipment training',
    'A personal project',
    'An upskilling project',
    'An entrepreneurial project or prototype',
  ];

  ngOnInit(): void {}

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public api: ApiService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
