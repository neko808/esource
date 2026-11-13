import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {


  private items:Item[] = [
  	{
  		nombre: "Ayanami",
  		bio: "This is the bio of the character",
  		casa: "Monogatari",
  		img: "../../assets/img/blog/website-designer-penang.png"
  	},
  	{
  		nombre: "Hitagi",
  		bio: "This is the Hitagi bio of the character a little more dark",
  		casa: "Zen",
  		img: "../../assets/img/blog/6942403.jpg"
  	},
  	{
  		nombre: "Shinobu",
  		bio: "This is the Shinobu bio of the character",
  		casa: "Bake",
  		img: "../../assets/img/blog/nicole.jpg"
  	},
  	{
  		nombre: "Hanekawa",
  		bio: "This is Hanekawa the bio of the character and her friends",
  		casa: "Neko",
  		img: "../../assets/img/blog/website-designer-penang.png"
  	},



  ];


  constructor() { 
  	console.log('Service ready for use!');
  }


  getItems(){
  	return this.items;
  }

  getItem( idx:number ){
    return this.items[idx];
  }


}


export interface Item{
	nombre:string;
	bio:string;
	casa:string;
	img:string;
}
