import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { gsap, Power1, Power3, Linear } from "gsap"; 


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  service: string = 'maps';
  interval:any;
  count: number = 0;
  anim: any;

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {

    this.title.setTitle('Google Maps');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Servicios de mapas en cada plataforma para potenciar la experiencia de usuario' 
    })
    this.meta.updateTag({
      name: 'keywords',
      content: 'Google maps, APIs,  Android, iOS, navegadores web, maps, routes, places, transporte compartido, Partner Premier de Google Maps'
    })

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




      this.anim = setInterval(() => {
        const services = ['maps', 'routes', 'places'];

        this.count === 2 ? this.count = 0 :  this.count += 1;        
        this.service = services[this.count];
        console.log(this.count);
        this.changeService(services[this.count], 'interval');
      }, 7000);
 
  }

  changeService(servicio, interval){
  	interval !== '' ? '' : clearInterval(this.interval);
  	this.service = servicio;

  	console.log('Weis Schwarz!');

  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  };

}
