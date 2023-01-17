import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-purchase-confirmation',
  templateUrl: './purchase-confirmation.component.html',
  styleUrls: ['./purchase-confirmation.component.css']
})
export class PurchaseConfirmationComponent {
  constructor(
    public dialogRef: MatDialogRef<PurchaseConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface DialogData {
  animal: string;
  name: string;
}
