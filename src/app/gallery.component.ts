import {Component, OnInit, Inject} from '@angular/core';
import {LightboxService} from "angular2_photoswipe";
import {Image} from "angular2_photoswipe";
import { expos } from '../assets/photos';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {

  galleryKey:string;
  animal: string;
  name: string;

  constructor(
    private ls:LightboxService,
    public dialog: MatDialog
  ) {

  }

  ngOnInit() {
      this.loadImages();
  }

  loadImages() {
    var img;
    expos.forEach((expo) => {
      this.ls.createGallery(expo.name);
      for (let i=1; i <= expo.amountOfPhotos; i++) {
        img = 'img' + i;
        img = new Image();
        img.largeUrl = '../assets/'+expo.name+'/'+i+ expo.format;
        img.height = 3296;
        img.width = 4934;
        img.id = i-1;
        img.size = `${img.width}x${img.height}`;
        img.thumbUrl = '../assets/'+expo.name+'/'+i+ expo.format;
        this.ls.addImage(expo.name, img);
      }
    })
    
    
      setTimeout(() => {
          this.galleryKey = 'galleryKey';
      }, 2000);
  }

  openDialog(expoName: string): void {
    this.dialog.open(GalleryDialog, {
      data: {name: expoName}
    });
  }
}

@Component({
  selector: 'gallery-dialog',
  templateUrl: 'gallery-dialog.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryDialog {

  constructor(
    public dialogRef: MatDialogRef<GalleryDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  imagesLoaded(event:any) {
    console.log(event);
}

}