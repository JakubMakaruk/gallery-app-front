import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {GalleryService} from "../../services/gallery.service";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImageSliderComponent {
  currentIndex: number;
  constructor(private dialogRef: MatDialogRef<ImageSliderComponent>,
              private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private _galleryService: GalleryService) {
    this.currentIndex = this.data.image.index;
  }

  onPrevious() {
    this.currentIndex = this.currentIndex <= 0 ? this.data.images.length - 1 : this.currentIndex - 1;
  }

  onNext() {
    this.currentIndex = this.currentIndex >= this.data.images.length - 1 ? 0 : this.currentIndex + 1;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  deleteImage() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {confirm: false}
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._galleryService.deleteImage(this.data.galleryId, this.data.images[this.currentIndex].id).subscribe(() => {
          this.dialogRef.close('true');
        });
      }
    })

  }
}
