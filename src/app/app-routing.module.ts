import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GalleryViewComponent} from "./components/gallery-view/gallery-view.component";
import {LoginPageComponent} from "./components/login-page/login-page.component";

const routes: Routes = [
  // { path: '', redirectTo: '/galleries', pathMatch: 'full' },
  { path: '', component: GalleryViewComponent, pathMatch: 'full'},
  { path: 'login', component: LoginPageComponent },
  { path: 'galleries', component: GalleryViewComponent},
  { path: 'galleries/:galleryId', component: GalleryViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
