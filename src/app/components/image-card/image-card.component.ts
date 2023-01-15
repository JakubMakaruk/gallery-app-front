import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {ImageModel} from "../../models/image.model";

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent {

  resolvedSrc: SafeUrl = '';
  imageSrc: any = null;
  image!: ImageModel;

  @Input() set src(image: any) {
    this.image = image;
    this.resolvedSrc = this.domSanitizer.bypassSecurityTrustResourceUrl('http://localhost:3000/' + this.image.path);
    this.imageSrc = this.domSanitizer.bypassSecurityTrustStyle(`url(${this.resolvedSrc})`)
  }

  @Output() eventPreviewImage = new EventEmitter<ImageModel>()

  constructor(private domSanitizer: DomSanitizer) {
  }


  getImageUrl() {
    return `url(`
  }

  onPreviewImage() {
    this.eventPreviewImage.emit(this.image);
  }
}
