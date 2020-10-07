import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  linksTitle = 'My Favorite Links';
  favLinks = ['https://education.launchcode.org/', 'https://github.com/hack1973/', 'https://repl.it/@hack1973'];
  
  constructor() { }

  ngOnInit() {
  }

}
