import {Component, OnInit} from '@angular/core';
import {GalleryService} from "../../services/gallery.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateGalleryDialogComponent} from "../create-gallery-dialog/create-gallery-dialog.component";

@Component({
  selector: 'app-galleries-nav',
  templateUrl: './galleries-nav.component.html',
  styleUrls: ['./galleries-nav.component.scss']
})
export class GalleriesNavComponent implements OnInit{

  constructor(private galleryService: GalleryService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  createGallery() {
    const dialogRef = this.dialog.open(CreateGalleryDialogComponent, {
      data: {name: ''},
      minWidth: '500px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.galleryService.createGallery(result).subscribe((res) => {
          console.log('created new gallery');
          console.log(res);
        })
      }
    })

  }

}
