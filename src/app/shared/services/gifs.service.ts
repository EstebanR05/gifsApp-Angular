import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})

export class GifsService {

  private url: string = `https://api.giphy.com/v1/gifs`;
  private ApiKey: string = 'pLRTGv9GA4cotR5Iu3tSqgykJORgNWZK';
  private _historial: string[] = [];
  public result: Gif[] = [];

  constructor(
    private _httpClient: HttpClient,
  ) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.result = JSON.parse(localStorage.getItem('result')!) || [];
  }

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string = '') {
    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
    const params = new HttpParams().set('api_key', this.ApiKey).set('limit', '10').set('q', query);

    this._httpClient.get<SearchGifsResponse>(`${this.url}/search`, { params })
      .subscribe((resp) => {
        console.log(resp.data);
        this.result = resp.data;
        localStorage.setItem('result', JSON.stringify(this.result));
      })
  }

  //explain:
  //unshit() is one metod of used for the insert one query in start
  //i used this [...] because the historial will change in the time
  //toLocaLeLowercase() is one metod of used for the question if is mayus or not
  //splice() is one metod of used for the rize the saved elements

}
