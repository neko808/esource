import { Component, OnInit } from '@angular/core';
import { gsap, Power1, Power3, Linear } from "gsap"; 
import Draggable from "gsap/Draggable";
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  	gsap.registerPlugin(ScrollTrigger, Draggable);

	let tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#ibar',
          start: 'top center'
        }
      });

      tl.from('.wtitle', { x: 200, opacity: 0, duration:.8})
        .from('.sim-button', {x: -200, opacity: 0, duration:.8}, "-=0.2")


  }

}
