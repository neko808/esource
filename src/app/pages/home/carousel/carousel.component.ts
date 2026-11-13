import { Component, OnInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  myCarousel;
  // carouselWidth = 640;
  // carouselHeight = 220;

  @ViewChildren(CarouselComponent) carouselComponent;

  constructor() { }

  ngOnInit(): void {
    
  }

}
