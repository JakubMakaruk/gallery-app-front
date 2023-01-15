import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryViewComponent } from './components/gallery-view/gallery-view.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { GalleriesNavComponent } from './components/galleries-nav/galleries-nav.component';
import { CopyrightPanelComponent } from './components/copyright-panel/copyright-panel.component';
import {HttpClientModule} from "@angular/common/http";
import { CreateGalleryDialogComponent } from './components/create-gallery-dialog/create-gallery-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import { ImagesViewComponent } from './components/images-view/images-view.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    AppComponent,
    GalleryViewComponent,
    SideNavComponent,
    UserDetailsComponent,
    UploadFileComponent,
    GalleriesNavComponent,
    CopyrightPanelComponent,
    CreateGalleryDialogComponent,
    ImagesViewComponent,
    ImageCardComponent,
    ImageSliderComponent,
    ConfirmDialogComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        FormsModule,
        MatMenuModule
    ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
