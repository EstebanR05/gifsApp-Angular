import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})

export class GifsService {
 
  private url = `https://api.giphy.com/v1/gifs/search?api_key=pLRTGv9GA4cotR5Iu3tSqgykJORgNWZK&q=dragonballz&limit=10`;
  private _historial: String[] = [];
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

  buscarGifs(query: String = '') {
    
    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
      localStorage.setItem('historial', JSON.stringify(this._historial)); 
    }
   
    this._httpClient.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=pLRTGv9GA4cotR5Iu3tSqgykJORgNWZK&q=${query}&limit=10`)
    .subscribe( ( resp ) => {
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
