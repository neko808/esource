import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-casos-exito',
  templateUrl: './casos-exito.component.html',
  styleUrls: ['./casos-exito.component.scss']
})
export class CasosExitoComponent implements OnInit {


  solution:string = 'panama';
  card:string = 'retail';
  interval:any;
  solutionNo:number = 0;



  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {

    this.title.setTitle('Casos de éxito ');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'eSource Capital ha ayudado a muchas empresas a través de los años. Aquí hay algunas de nuestras historias más exitosas y grandes amigos.' 
    })
    this.meta.updateTag({
      name: 'keywords',
      content: 'Casos de éxito, eSource Capital, Panamá, Venezuela, Guatemala, Colombia, Argentina, México, Nicaragua y Centro América, Naranja X, La casa de las baterias, Familia Alqueria, Grupo pit, hornitos, Hyundai Petroautos, Grupo Gala, Grupo Epasa, Banesco, Inmegen, Arturo calle, Roots, Plastiglas, Sportline América, Casa Oliveira, Grupo Lamper, Sercoinfal, Sera Scandia, BNI Estacionamientos, Pendulum, Quimmco, Navent, Nicaragua Sugar Estates Limited, Publicidad Comercial'
    })

    /*        TABS PAISES       */
    this.interval = setInterval(() => {
      // this.solutionNo = this.solutionNo !== 7 ? this.solutionNo +1 : this.solutionNo = 0;
      let solutions = ['panama', 'colombia', 'venezuela', 'mexico', 'guatemala', 'argentina', 'nicaragua', 'america', 'europa'];
      console.log(this.solutionNo)
      this.changeSolution(solutions[this.solutionNo], 'interval');
    }, 6000)




  	/*    SHOW MODALS   */
    const triggers = document.getElementsByClassName('trigger');
    const triggerArray = Array.from(triggers).entries();
    const modals = document.getElementsByClassName('modal');
    const closeButton = document.getElementsByClassName('btn-close');

    // const myPlayer = document.getElementById('player');

    for (let [index, trigger] of triggerArray) {
      let triggerIndex = index;
      function toggleModal() {
        modals[triggerIndex].classList.toggle('show-modal');
      }
      trigger.addEventListener("click", toggleModal);
      closeButton[triggerIndex].addEventListener("click", toggleModal);
    }


  }



  changeSolution(solucion, interval) {
    // clearInterval(this.interval);
    interval !== '' ? '' : clearInterval(this.interval);
    console.log(this.interval)
    this.solution = solucion;
  }


  closeVideo2(){
    let myPlayer = document.getElementById('player2');
    myPlayer.setAttribute("src", " ");
    myPlayer.setAttribute("src", "https://www.youtube.com/embed/EUjWFr3w7RU");
  }

  closeVideo3(){
    let myPlayer = document.getElementById('player3');
    myPlayer.setAttribute("src", " ");
    myPlayer.setAttribute("src", "https://www.youtube.com/embed/3Ts5hIwg5VY");
  }

  closeVideo5(){
    let myPlayer = document.getElementById('player5');
    myPlayer.setAttribute("src", " ");
    myPlayer.setAttribute("src", "https://www.youtube.com/embed/B88dYrcEEFo");
  }

  closeVideo6(){
    let myPlayer = document.getElementById('player6');
    myPlayer.setAttribute("src", " ");
    myPlayer.setAttribute("src", "https://www.youtube.com/embed/f0KDqYa1_9Y");
  }

  closeVideo7(){
    let myPlayer = document.getElementById('player7');
    myPlayer.setAttribute("src", " ");
    myPlayer.setAttribute("src", "https://www.youtube.com/embed/-TuFChJ3a9c");
  }

  closeVideo8(){
    let myPlayer = document.getElementById('player8');
    myPlayer.setAttribute("src", " ");
    myPlayer.setAttribute("src", "https://www.youtube.com/embed/tOxm9xUBKvI");
  }

  closeVideo9(){
    let myPlayer = document.getElementById('player9');
    myPlayer.setAttribute("src", " ");
    myPlayer.setAttribute("src", "https://www.youtube.com/embed/702Hn_tU4FE");
  }

  closeVideo10(){
    let myPlayer = document.getElementById('player10');
    myPlayer.setAttribute("src", " ");
    myPlayer.setAttribute("src", "https://www.youtube.com/embed/EQFqtLd7iRY");
  }

  closeVideo11(){
    let myPlayer = document.getElementById('player11');
    myPlayer.setAttribute("src", " ");
    myPlayer.setAttribute("src", "https://www.youtube.com/embed/2mPQTfQ_CLc");
  }

  closeVideo12(){
    let myPlayer = document.getElementById('player12');
    myPlayer.setAttribute("src", " ");
    myPlayer.setAttribute("src", "https://www.youtube.com/embed/DIsZOl27KFM");
  }

  closeVideo14(){
    let myPlayer = document.getElementById('player14');
    myPlayer.setAttribute("src", " ");
    myPlayer.setAttribute("src", "https://www.youtube.com/embed/dYl9PS-En4w");
  }




  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  };


}
