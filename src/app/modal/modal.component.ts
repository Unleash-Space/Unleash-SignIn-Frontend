import { ApiService } from './../api-service/api.service';
import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

class reason {
  public option: string;
  public index: number;
  public subReason?: reason[];
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  options: reason[] = [];

  ngOnInit(): void {
    console.log('OPEN MODAL', this.data);
  }

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public api: ApiService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
