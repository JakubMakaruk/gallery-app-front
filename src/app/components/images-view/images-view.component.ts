import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {GalleryService} from "../../services/gallery.service";
import {ImageModel} from "../../models/image.model";
import {DomSanitizer} from "@angular/platform-browser";
import {MatDialog} from "@angular/material/dialog";
import {ImageSliderComponent} from "../image-slider/image-slider.component";
import {noop} from "rxjs";

@Component({
  selector: 'app-images-view',
  templateUrl: './images-view.component.html',
  styleUrls: ['./images-view.component.scss']
})
export class ImagesViewComponent implements OnInit {

  currentGalleryId: string = '';
  images: any = [];

  previewMode: boolean = false;

  constructor(private galleryService: GalleryService,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.currentGalleryId = params['galleryId'];
      this.initImages(this.currentGalleryId);
    })

    this.galleryService.uploadImagePing.subscribe(() => {
      this.initImages(this.currentGalleryId)
    })
  }

  initImages(galleryId: string) {
    this.galleryService.getImages(galleryId).subscribe((images: any) => {
      this.images = images.map((image: any, index: number) => {
        let newImage = new ImageModel(image, index);
        // newImage.path += 'http://localhost:3000/';
        newImage.sanitizeUrl = this.sanitizer.bypassSecurityTrustUrl('http://localhost:3000/' + newImage.path);
        return newImage;
      });
    })
  }


  showImageSlider(image: ImageModel) {
    this.previewMode = true;

    let dialogRef = this.dialog.open(ImageSliderComponent, {
      width: '100vw',
      maxWidth: '100vw',
      height: '100vh',
      maxHeight: '100vh',
      panelClass: 'image-slider',
      data: {galleryId: this.currentGalleryId, image: image, images: this.images}
    });

    dialogRef.afterClosed().subscribe(result => {
      result ? this.initImages(this.currentGalleryId) : noop();
    })
  }
}
