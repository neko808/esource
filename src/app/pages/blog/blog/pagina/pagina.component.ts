import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TituloComponent } from '../../titulo/titulo.component';


// import { ItemsService } from '../../../../services/items.service';
import { StrapiService } from '../../../../services/strapi.service';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.scss']
})
export class PaginaComponent implements OnInit {

  datas:any=[];
  data:any;
  myDatas:any=[];
  myData:any;
  totalLength:any;
  errores:string="";

  //id = 0;
  id:number;


  constructor( private activatedRoute: ActivatedRoute,
               private router: Router,
  			       public strapiserv:StrapiService 
  	){ 

  	// this.activatedRoute.params.subscribe( params => {
  	// 	this.item = this.strapiserv.getData( params['id'] );
  	// });

    }

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
 