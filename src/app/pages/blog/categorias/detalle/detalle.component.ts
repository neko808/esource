import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { StrapiService } from '../../../../services/strapi.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  datas:any=[];
  data:any;
  errores:string="";
  id:number;


  constructor( private activatedRoute: ActivatedRoute,
               private router: Router,
  			       public strapiserv:StrapiService 
  	){ }

  ngOnInit(): void {

    this.id=this.activatedRoute.snapshot.params.id;

    this.strapiserv.getDataById(this.id).subscribe(res=>{

        this.datas= res as string[];

    }, error =>{
      console.log(error);
        if(error.status == 0){
            this.errores="Código del error: "+error.status+" \n Ha ocurrido un error del lado del cliente o un error de red.";
        }else{
            this.errores="Código del error: "+error.status+"\n\n"+error.statusText;
        }
    })


  }

}
