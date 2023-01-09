export class GalleryModel {
  id!: string;
  name!: string;

  constructor(resp: any) {
    this.id = resp._id;
    this.name = resp.name;
  }
}
