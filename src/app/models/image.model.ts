import {SafeUrl} from "@angular/platform-browser";

export class ImageModel {
  id!: string;
  index!: number;
  originalFilename!: string;
  filename!: string;
  contentType!: string;
  path!: string;
  galleryId!: string;
  sanitizeUrl!: SafeUrl;

  constructor(resp: any, index: number) {
    this.id = resp._id;
    this.index = index;
    this.originalFilename = resp.originalFilename;
    this.filename = resp.filename;
    this.contentType = resp.contentType;
    this.path = resp.path;
    this.galleryId = resp.galleryId;
  }
}
