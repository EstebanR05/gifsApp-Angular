import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPrincipalComponent } from './search-principal.component';

describe('SearchPrincipalComponent', () => {
  let component: SearchPrincipalComponent;
  let fixture: ComponentFixture<SearchPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
