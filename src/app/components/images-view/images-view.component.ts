import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {GalleryService} from "../../services/gallery.service";
import {ImageModel} from "../../models/image.model";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-images-view',
  templateUrl: './images-view.component.html',
  styleUrls: ['./images-view.component.scss']
})
export class ImagesViewComponent implements OnInit {

  currentGalleryId: string = '';
  images: any = [];

  constructor(private galleryService: GalleryService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.currentGalleryId = params['galleryId'];
      this.initImages(this.currentGalleryId);
    })
  }

  initImages(galleryId: string) {
    this.galleryService.getImages(galleryId).subscribe((images: any) => {
      this.images = images.map((image: any) => {
        let newImage = new ImageModel(image);
        // newImage.path += 'http://localhost:3000/';
        // newImage.sanitizeUrl = this.sanitizer.bypassSecurityTrustUrl('http://localhost:3000/' + newImage.path);
        return newImage;
      });
    })
  }


}
