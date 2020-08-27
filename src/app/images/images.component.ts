import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Gif } from '../gif';

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
  gifsArray: Gif[] = [];
  isGrouped: boolean = false;
  uniqueTagsArray: string[] = [];

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
      let gif: Gif = {
        tag: this.userInputTag,
        url: serverResponse.data.image_url
      };
      this.gifsArray.push(gif);

      if (this.isGrouped) {
        this.fillUniqueTagsArray();
      };

    } else {
      alert('По тегу ничего не найдено');
    }
  }

  clear(): void {
    this.gifsArray = [];
    this.userInputTag = '';
    this.uniqueTagsArray = [];
  }

  groupImages(): void {
    this.isGrouped = true;
    this.fillUniqueTagsArray();
  }

  ungroupImages(): void {
    this.isGrouped = false;
    this.uniqueTagsArray = [];
  }

  displayTag(tag: string): void {
    this.userInputTag = tag;
  }

  fillUniqueTagsArray(): void {
    for (let gif of this.gifsArray) {
      if (!this.uniqueTagsArray.includes(gif.tag)) {
        this.uniqueTagsArray.push(gif.tag);
      };
    };
  }

  getGifJSON(tag: string): void {
    this.imageService.getGifJSON(tag).subscribe(serverResponse => {
      this.handleResponse(serverResponse);
    });
  }
}
