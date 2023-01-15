import {Component, OnInit} from '@angular/core';
import {GalleryService} from "../../services/gallery.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  currentGalleryId: string = '';

  constructor(private _galleryService: GalleryService,
              private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.currentGalleryId = params['galleryId'];
    })
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    const formData = new FormData();
    formData.append('image', file);

    this._galleryService.uploadImage(this.currentGalleryId, formData).subscribe((req) => {
      this._galleryService.uploadImagePing.next();
    })
  }
}
