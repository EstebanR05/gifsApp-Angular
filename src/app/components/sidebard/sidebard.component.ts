import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/shared/services/gifs.service';

@Component({
  selector: 'app-sidebard',
  templateUrl: './sidebard.component.html',
  styleUrls: ['./sidebard.component.scss']
})
export class SidebardComponent implements OnInit {

  get historial() {
    return this._gifsService.historial;
  }

  constructor(
    public _gifsService: GifsService,
  ) { }

  ngOnInit(): void {
  }

}
