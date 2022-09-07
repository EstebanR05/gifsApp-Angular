import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: String = 'pLRTGv9GA4cotR5Iu3tSqgykJORgNWZK'; 
  private Url: String = 'https://api.giphy.com/v1/gifs/search';
  private _historial: String[] = [];

  constructor() { }

  get historial() {
    return [...this._historial];
  }
  buscarGifs(query: String = '') {
    
    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
    }
    console.log(this._historial);
  }

  //explain:
  //unshit() is one metod of used for the insert one query in start
  //i used this [...] because the historial will change in the time
  //toLocaLeLowercase() is one metod of used for the question if is mayus or not
  //splice() is one metod of used for the rize the saved elements

}
