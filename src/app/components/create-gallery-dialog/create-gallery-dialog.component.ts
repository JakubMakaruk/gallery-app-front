import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {GalleriesNavComponent} from "../galleries-nav/galleries-nav.component";

@Component({
  selector: 'app-create-gallery-dialog',
  templateUrl: './create-gallery-dialog.component.html',
  styleUrls: ['./create-gallery-dialog.component.scss']
})
export class CreateGalleryDialogComponent {
  constructor(public dialogRef: MatDialogRef<GalleriesNavComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onBackClick(): void {
    this.dialogRef.close();
  }
}
