import {Component, OnInit} from '@angular/core';
import {GalleryService} from "../../services/gallery.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateGalleryDialogComponent} from "../create-gallery-dialog/create-gallery-dialog.component";
import {GalleryModel} from "../../models/gallery.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-galleries-nav',
  templateUrl: './galleries-nav.component.html',
  styleUrls: ['./galleries-nav.component.scss']
})
export class GalleriesNavComponent implements OnInit{

  galleries: any[] = [];
  images: any[] = [];

  constructor(private galleryService: GalleryService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.initGalleries();
  }

  initGalleries() {
    this.galleryService.getGalleries().subscribe((galleries: any) => {
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
        this.galleryService.createGallery(result).subscribe((res) => this.initGalleries())
      }
    })

  }

}
