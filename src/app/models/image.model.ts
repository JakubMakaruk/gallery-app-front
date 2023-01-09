import {SafeUrl} from "@angular/platform-browser";

export class ImageModel {
  id!: string;
  filename!: string;
  contentType!: string;
  path!: string;
  galleryId!: string;
  // sanitizeUrl!: SafeUrl;

  constructor(resp: any) {
    this.id = resp._id;
    this.filename = resp.filename;
    this.contentType = resp.contentType;
    this.path = resp.path;
    this.galleryId = resp.galleryId;
  }
}
