import { Component, OnInit, ElementRef, Inject, ViewChild } from "@angular/core";
import { Meta, Title } from '@angular/platform-browser';

import { gsap, Power1, Power2, Linear, Elastic } from "gsap/all"; 
import { TimelineMax } from 'gsap';
import Draggable from "gsap/Draggable";
import ScrollTrigger from 'gsap/ScrollTrigger';

import { CarouselComponent } from '../carousel/carousel.component';
import { SliderComponent } from '../slider/slider.component';
import { FormComponent } from '../../../share/form/form.component';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  timel: any;
  // @ViewChild('progress') progressElement: ElementRef;

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void{

    this.title.setTitle('eSource Capital: Cloud journey with piece of mind');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Google Cloud Partner Premier. Servicios profesionales y de consultoría de empresas para la modernización de infraestructura, aplicaciones y data analytics' 
    })
    this.meta.updateTag({
      name: 'keywords',
      content: 'esource capital, software de productividad empresarial, work transformation, consultoria especializada, modelo de trabajo, esource ti, google cloud, google workspace, integracion de sistemas, big data analytics, google cloud platform, la nube'
    })

    gsap.registerPlugin(ScrollTrigger, Draggable);

      const boxAnim = gsap.timeline();
      boxAnim.from(".target", 1, {autoAlpha:0, delay:0.6});



      let tl = gsap.timeline({
        repeat:1, 
        yoyo:true,
        scrollTrigger: {
          trigger: '#trigger1',
          start: 'top center'
        }
      });

      tl.from('.bb', { x: 200, opacity: 0, duration:1.5})
        .from('.content', {y: 300, opacity: 0, duration: 1}, "-=1")





          const elems = document.querySelectorAll('.box');

          gsap.set(elems, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power1',
            overwrite: 'auto'
          });
          
          ScrollTrigger.create({
            trigger: '.box',
            start: 'top 60%',
            end: 'bottom 10%',
            // markers: true,
            onEnter: () => gsap.to(elems, {
              y: 0,
              opacity: 1,
              stagger: 0.14,
            }),
            onLeave: () => gsap.to(elems, {
              y: 0,
              opacity: 1,
              stagger: 0.14,
            }),
          });



        var konditionen = gsap.timeline();
            
          const observerElement = document.querySelector('.table');
          const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0
          };

          const observer = new IntersectionObserver(handleIntersect, observerOptions);
          function handleIntersect(entry) {

            entry.forEach(entrie => {

              if (entrie.intersectionRatio > 0) {
                konditionen.from(".figure span", {
                duration: 2,
                ease: "none",
                innerText: 0,
                roundProps: "innerText",
                  onUpdate: function() {
                      this.targets().forEach(target => {
                          const val = gsap.getProperty(target, "innerText");
                    
                      });
                    },
                });
                observer.unobserve(observerElement);


              } else {
   
              }

            });
             
          }

          observer.observe(observerElement);
              
  }

}
