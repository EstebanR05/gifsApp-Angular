import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPrincipalComponent } from './search/search-principal/search-principal.component';
import { SearchListComponent } from './search/search-list/search-list.component';

@NgModule({
  declarations: [
    SearchPrincipalComponent,
    SearchListComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SearchPrincipalComponent,
    SearchListComponent
  ],
})

export class PlatformModule { }
