import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavGifsComponent } from './fav-gifs.component';

describe('FavGifsComponent', () => {
  let component: FavGifsComponent;
  let fixture: ComponentFixture<FavGifsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavGifsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
