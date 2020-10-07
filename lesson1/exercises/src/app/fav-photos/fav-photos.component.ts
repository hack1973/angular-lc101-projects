import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lifestyle-bestdogbreeds-1577128927.png?crop=0.502xw:1.00xh;0.263xw,0&resize=640:*';
  image2 = 'https://hips.hearstapps.com/edc.h-cdn.co/assets/16/25/gettyimages-563680559.jpg?crop=0.447xw:1.00xh;0.253xw,0&resize=480:*';
  image3 = 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/stock/2019/2/19/GettyImages-172955261.jpg.rend.hgtvcom.966.644.suffix/1550582942666.jpeg';

  constructor() { }

  ngOnInit() {
  }

}