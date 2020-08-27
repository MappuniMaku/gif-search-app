import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.sass']
})
export class ImagesComponent implements OnInit {

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
  }

  userInputTag: string = '';
  queryInProgress: boolean = false;
  gifsArray = [];

  searchTag(): void {
    if (this.userInputTag) {
      this.queryInProgress = true;
      this.getGifJSON(this.userInputTag);
    } else {
      alert('Заполните поле "тег"');
    }
  }

  handleResponse(serverResponse): void {
    this.queryInProgress = false;

    if(serverResponse.data.image_url) {
      this.gifsArray.push({tag: this.userInputTag, url: serverResponse.data.image_url});
    } else {
      alert('По тегу ничего не найдено');
    }
  }

  clear(): void {
    this.gifsArray = [];
    this.userInputTag = '';
  }

  getGifJSON(tag: string): void {
    this.imageService.getGifJSON(tag).subscribe(serverResponse => {
      this.handleResponse(serverResponse);
    });
  }
}
