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
  queryInProgress: boolean = false;

  gifJSON;
  srcArr = [];

  searchTag(): void {
    if (this.currentTag) {
      this.queryInProgress = true;
      this.getGif(this.currentTag);
    } else {
      alert('Введите тег для поиска')
    }
  }

  handleResponse(): void {
    this.queryInProgress = false;

    if(this.gifJSON.data.image_url) {
      this.srcArr.push({tag: this.currentTag, url: this.gifJSON.data.image_url});
    } else {
      alert('По Вашему запросу ничего не найдено!');
    }
  }

  logAll(): void {
    let i: number;
    let currentItem;

    for (i = 0; i < this.srcArr.length; i += 1) {
      currentItem = this.srcArr[i];
      console.log(currentItem.tag + ': ' + currentItem.url);
    }
  }

  getGif(url: string): void {
    this.imageService.getGif(url).subscribe(json => {
      this.gifJSON = json;
      this.handleResponse();
    });
  }
}
