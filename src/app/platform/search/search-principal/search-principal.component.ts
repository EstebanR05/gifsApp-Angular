import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/shared/services/gifs.service';

@Component({
  selector: 'app-search-principal',
  templateUrl: './search-principal.component.html',
  styleUrls: ['./search-principal.component.scss']
})
export class SearchPrincipalComponent implements OnInit {

  @ViewChild('textSearch') textSearch!: ElementRef<HTMLInputElement>;

  constructor(
    public _gifsService: GifsService,
  ) { }

  ngOnInit(): void {
  }

  search() {
    const values = this.textSearch.nativeElement.value;
    this._gifsService.buscarGifs(values);
    this.textSearch.nativeElement.value = '';
  }

}