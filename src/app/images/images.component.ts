import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.sass']
})
export class ImagesComponent implements OnInit {

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
  }

  currentTag: string = '';

  gifJSON;
  srcArr = [];

  searchTag(): void {
    this.getGif(this.currentTag);
  }

  logAll(): void {
    let i: number;
    let currentItem;

    for (i = 0; i < this.srcArr.length; i += 1) {
      currentItem = this.srcArr[i];
      console.log(currentItem.tag + ': ' + currentItem.url);
    }
    console.log('url: ' + this.gifJSON.data.image_url);
  }

  getGif(url: string): void {
    this.imageService.getGif(url).subscribe(json => {
      this.gifJSON = json;
      this.srcArr.push({tag: this.currentTag, url: this.gifJSON.data.image_url})
    });
  }
}
