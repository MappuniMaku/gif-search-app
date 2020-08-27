import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(
    private http: HttpClient
  ) { }

  getGifJSON(tag: string) {
    const url: string = `https://api.giphy.com/v1/gifs/random?api_key=biXysln47XZ03gvbYk2z9BYMT7eaHT5R&tag=${tag}`
    return this.http.get(url).pipe(
      // tap(_ => console.log('GIF загружена успешно')),
      catchError(this.handleError('getGif', [])),
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      alert('Произошла http ошибка');
      return of(result as T);
    };
  }
}
