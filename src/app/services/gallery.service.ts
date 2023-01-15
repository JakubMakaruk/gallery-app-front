import { Injectable } from '@angular/core';
import {WebRequestService} from "./web-request.service";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  public uploadImagePing: Subject<void> = new Subject();

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

  uploadImage(galleryId: string, formData: FormData) {
    return this.webReqService.post(`galleries/${galleryId}/upload`, formData);
  }

  deleteGallery(galleryId: string) {
    return this.webReqService.delete(`galleries/${galleryId}`);
  }

  deleteImage(galleryId: string, imageId: string) {
    return this.webReqService.delete(`galleries/${galleryId}/images/${imageId}`)
  }
}
