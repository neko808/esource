import { Component, OnInit } from '@angular/core';
import { StrapiService } from '../../../services/strapi.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent implements OnInit {

  datas:any=[];
  errores:string="";
  totalLength:any;

  constructor(
    public strapiserv:StrapiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {


  	this.strapiserv.getData().subscribe(res=>{

        this.datas= res as string[];

        this.totalLength = res.length;


    }, error =>{
      console.log(error);
        if(error.status == 0){
            this.errores="Código del error: "+error.status+" \n Ha ocurrido un error del lado del cliente o un error de red.";
        }else{
            this.errores="Código del error: "+error.status+"\n\n"+error.statusText;
        }
    }) 


  }

  reloadPage() {
    setTimeout(()=>{
      window.location.reload();
    }, 100);
  }

}
