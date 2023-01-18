import {Component, OnInit} from '@angular/core';
import {GalleryService} from "../../services/gallery.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateGalleryDialogComponent} from "../create-gallery-dialog/create-gallery-dialog.component";
import {GalleryModel} from "../../models/gallery.model";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-galleries-nav',
  templateUrl: './galleries-nav.component.html',
  styleUrls: ['./galleries-nav.component.scss']
})
export class GalleriesNavComponent implements OnInit{

  galleries: any[] = [];
  images: any[] = [];

  constructor(private _galleryService: GalleryService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.initGalleries();
  }

  initGalleries() {
    this._galleryService.getGalleries().subscribe((galleries: any) => {
      console.log('reload elementów')
      this.galleries = galleries.map((gallery: any) => new GalleryModel(gallery));
    });
  }

  createGallery() {
    const dialogRef = this.dialog.open(CreateGalleryDialogComponent, {
      data: {name: ''},
      minWidth: '500px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._galleryService.createGallery(result).subscribe((res) => this.initGalleries())
      }
    })

  }

  deleteGallery(event: any, galleryId: string) {
    event.preventDefault();
    event.stopPropagation();

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {confirm: false}
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._galleryService.deleteGallery(galleryId).subscribe(() => this.initGalleries());
      }
    })
  }
}
