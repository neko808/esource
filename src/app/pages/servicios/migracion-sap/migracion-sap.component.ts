import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-migracion-sap',
  templateUrl: './migracion-sap.component.html',
  styleUrls: ['./migracion-sap.component.scss']
})
export class MigracionSapComponent implements OnInit {

  constructor(
  	private title: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {

  	this.title.setTitle('Migración SAP a GCP');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Explore todas las posibilidades de migrar SAP a Google Cloud: extienda las capacidades, optimice el desempeño y escale su infraestructura' 
    })
    this.meta.updateTag({
      name: 'keywords',
      content: 'SAP, GCP, Google Cloud Platform, Transformación digital, escalabilidad, analitica de datos, infraestructura, Google cloud, Custom Machines, Data Analytics de Google, LATAM, Administración de datos, administración de aplicaciones, SAP Intelligent Technologies, SAP B1 on HANA, la nube'
    })

  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  };

}
