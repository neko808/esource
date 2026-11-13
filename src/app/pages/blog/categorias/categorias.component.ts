import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { StrapiService } from '../../../services/strapi.service';




@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  datas:any=[];
  categories:any=[];
  errores:string="";
  totalLength:any;
  page:number = 1;
  category:any;
  categorias:any=[];

  myArray:any = [];
  itemsBlog:number=0;


  constructor(
  	private title: Title,
    private meta: Meta,
    public strapiserv:StrapiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) { 
  }

  myCategories(datas: any){
     let newArr = [];
     let uniqueArray:any;
      datas.forEach((item, index) => {
        newArr.push(item.category.name);
        uniqueArray = newArr.filter(function(item, pos, self) {
          return self.indexOf(item)===pos;
        })

         
      });
      return uniqueArray;
  }


  ngOnInit(): void {


  	this.title.setTitle('Blog');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Publicaciones más relevantes del mundo cloud, transformación digital y el mundo empresarial' 
    })
    this.meta.updateTag({
      name: 'keywords',
      content: 'Transformacion digital, Cloud, La nube, GCP, trabajo remoto, eSource capital, migración de datos, CSS, 2021, Navent, Google Cloud, Microsoft, Ciberseguridad'
    })


    this.strapiserv.getData().subscribe(res=>{

        this.categories=this.myCategories(res);

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







    this.category=this.activatedRoute.snapshot.params.category;
   
    this.strapiserv.getDataByCategory(this.category).subscribe(res=>{

        this.myArray= res as string[];
        this.itemsBlog=this.myArray.length;


    }, error =>{
      console.log(error);
        if(error.status == 0){
            this.errores="Código del error: "+error.status+" \n Ha ocurrido un error del lado del cliente o un error de red.";
        }else{
            this.errores="Código del error: "+error.status+"\n\n"+error.statusText;
        }
    })   



  }


  filterRelevante(datas: any) : any {
      return datas.filter(data => data.relevante)
  }

  onPageChange(page:number){
    window.scrollTo(0,0);
  }

  reloadPage() {
    setTimeout(()=>{
      window.location.reload();
    }, 100);
  }


}