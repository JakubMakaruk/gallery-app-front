import { Injectable } from '@angular/core';
import {WebRequestService} from "./web-request.service";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private webReqService: WebRequestService) { }

  getGalleries() {
    return this.webReqService.get('galleries');
  }

  createGallery(name: string) {
    return this.webReqService.post('galleries', { name });
  }

  getImages(galleryId: string) {
    return this.webReqService.get(`galleries/${galleryId}/images`);
  }
}
