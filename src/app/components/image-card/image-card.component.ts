import {Component, Input} from '@angular/core';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent {

  resolvedSrc: SafeUrl = '';
  imageSrc: any = null;
  image: any = null;

  @Input() set src(image: any) {
    this.image = image;
    this.resolvedSrc = this.domSanitizer.bypassSecurityTrustResourceUrl('http://localhost:3000/' + this.image.path);
    this.imageSrc = this.domSanitizer.bypassSecurityTrustStyle(`url(${this.resolvedSrc})`)
  }

  constructor(private domSanitizer: DomSanitizer) {
  }


  getImageUrl() {
    return `url(`
  }
}
