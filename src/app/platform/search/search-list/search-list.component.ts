import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/shared/services/gifs.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {

  get result() {
    return this._gifsService.result;
  }

  constructor(
    public _gifsService: GifsService,
  ) { }

  ngOnInit(): void {
  }

}
