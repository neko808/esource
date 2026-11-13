import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-rackspace',
  templateUrl: './rackspace.component.html',
  styleUrls: ['./rackspace.component.scss']
})
export class RackspaceComponent implements OnInit {

  // interesesCards:Array<Object> = [
  //   {
  //     name:'Google Workspace',  
  //     icon: `box.png`, 
  //     url: '/workspace'
  //   },
  //   {
  //     name:'Aceleración digital',  
  //     icon: `aceleracion.png`, 
  //     url: '/acceleracion-digital'
  //   }
  // ]

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {

    this.title.setTitle('Rackspace email');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Le ofrecemos una variedad de servicios de hospedaje de correo electrónico para satisfacer sus necesidades comerciales' 
    })
    this.meta.updateTag({
      name: 'keywords',
      content: 'Rackspace, email, correo electrónico, antispam, outlook, Rackspace Webmail, virus, O365'
    })
    
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  };

}
