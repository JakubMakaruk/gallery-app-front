import { Injectable } from '@angular/core';
import {WebRequestService} from "./web-request.service";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private webReqService: WebRequestService) { }

  createGallery(name: string) {
    return this.webReqService.post('galleries', { name });
  }
}
