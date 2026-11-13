import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor(
  	private title: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {

  	this.title.setTitle('Google Workspace for Education');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Mejora la educación con herramientas sencillas, flexibles y seguras' 
    })
    this.meta.updateTag({
      name: 'keywords',
      content: 'Google for education, google workspace, google, classroom, essential suite, eSource capital, centros educativos, enterprise, Gmail, calendar, chat, drive, blogger, youtube, education, meet'
    })

  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  };

}
