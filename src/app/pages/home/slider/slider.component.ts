import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  animateSlide: any;
  slide: string = 'gcloud';
  count: number = 0;
  slides: Array<string> = ['gcloud', 'work', 'gsuite']


  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.animateSlide = setInterval(() => {
        this.count === 2 ? this.count = 0 : this.count = this.count + 1;
        this.slide = this.slides[this.count];
      }, 13000);
    }
  }

  ngOnDestroy() {
    if (this.animateSlide) {
      clearInterval(this.animateSlide);
    }
  }

  setSlide(num) {
    this.count = num;
    this.slide = this.slides[this.count];
  }

}
