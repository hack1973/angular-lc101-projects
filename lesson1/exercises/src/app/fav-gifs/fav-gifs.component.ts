import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-gifs',
  templateUrl: './fav-gifs.component.html',
  styleUrls: ['./fav-gifs.component.css']
})
export class FavGifsComponent implements OnInit {
  gifsTitle = 'My Favorite Gifs';
  gif1 = 'https://img.devrant.com/devrant/rant/r_386045_bphPa.gif';

  constructor() { }

  ngOnInit() {
  }

}
