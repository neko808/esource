import { Component, OnInit, ElementRef, ViewChild, Inject, AfterViewInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import { SendmailService } from './../../../services/sendmail.service';
import { IContacto } from './contacto';
import { Router } from '@angular/router';
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  formVisible: boolean = false;
  formInfo: any =
    {
      show: false,
      type: '',
      head: '',
      text: ''
    }

  public href: string = "";

  landingForm: FormGroup;
  nombre: string;
  email: string;
  telefono: number;
  empresa: string;
  no_empleados: string;
  pais: string;
  mensaje: string; 
  provenienteDe: string;
  @ViewChild('captchaRef2') captchaRef2: ElementRef;


   @Inject(Number) private _reCaptchaId: number;
   @Inject(String) private SITE_ID: string = '6LcFxgkcAAAAAA6PfB1MpEBjV0l91oijQjXNsEB4';

//  @Inject(String) private SITE_ID: string = '6Lc1uAkcAAAAAEph28kkwRTy1j6UrmtmD6ODY9qg';
  constructor(
  	private fb: FormBuilder,
    private db: AngularFirestore, 
    private title: Title,
    private backendService: SendmailService,
    private meta: Meta,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
    ) { }

  ngOnInit(): void {

    this.title.setTitle('Contacto');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Pantalla con la informaicón de contacto para atender dudas, comentarios, preguntas y sugerencias' 
    })
    this.meta.updateTag({
      name: 'keywords',
      content: 'Contacto, eSource capital, oficinas, El Salvador, Argentina, Colombia, Costa Rica, Estados Unidos, Guatemala, Honduras, Italia, México, Nicaragua, Panamá, Perú, República Dominicana. Venezuela. España'
    })

    this.href = this.router.url;
    console.log('Hola ' + this.href);

  	this.landingForm = this.fb.group({
        nombre: ['', [Validators.required, Validators.pattern(/^([a-zA-Z ]|[à-ú]|[À-Ú])+$/)]],
        // email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
        email: ['', [Validators.required, Validators.pattern(/^([\w-.]+@(?!gmail\.com)(?!yahoo\.com)(?!hotmail\.com)([\w-]+.)+[\w-]{2,})?$/)]],
        telefono: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(13), Validators.pattern(/^[0-9 ]*$/)])],
        empresa: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
        mensaje: ['', [Validators.minLength(1), Validators.maxLength(250)]],
        empleados: ['', Validators.required],
        acceptTerms: ['', Validators.required],
        timestamp: [''],
        campana: ['home'],
        version: ['1'],
        referrer: [''],
        pais: ['', Validators.required]


    /*  nombre: ['', [Validators.required, Validators.pattern(/^([a-zA-Z ]|[à-ú]|[À-Ú])+$/)]],
      // email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      email: ['', [Validators.required, Validators.pattern(/^([\w-.]+@(?!gmail\.com)(?!yahoo\.com)(?!hotmail\.com)([\w-]+.)+[\w-]{2,})?$/)]],
      telefono: [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(13), Validators.pattern(/^[0-9 ]*$/)])],
      empresa: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
      mensaje: ['', [Validators.minLength(1), Validators.maxLength(250)]],
      empleados: ['', Validators.required],
      pais: ['', Validators.required],
      acceptTerms: ['', Validators.required],
      timestamp: [''],
      campana: ['home'],
      version: ['1'],
      referrer: [this.router.url]*/
    });


    function toggleDocs(event) {

        if (event.target && event.target.className == 'clickable-heading') {

            var next = event.target.nextElementSibling;
            if (next.style.display == "none") {
                next.style.display = "block";
            } else {
                next.style.display = "none";
            }
        }
    }
    document.addEventListener('click', toggleDocs, true);


    // let menu       = document.querySelector('.a');
    // let menuButton = document.querySelector('.q');

    // menuButton.addEventListener('click', function() {
    //   let menuIsClosed = !menu.classList.contains('opened');

    //   if (menuIsClosed) {
    //     menu.classList.add('opened')
    //   } else {
    //     menu.classList.remove('opened')
    //   }
    // })

  }

  icontacto : IContacto=<IContacto>{};

    // ToggleVisibility(divClass){
    //     var els = document.getElementsByClassName(divClass) as HTMLCollectionOf<HTMLElement>;
    //     for(var i = 0; i < els.length; i++)
    //     {
    //         els[i].style.visibility = els[i].style.visibility == "hidden" ? "visible" : "hidden";
    //     }
    // }


  ngAfterViewInit() {
    const grecaptcha = (window as any).grecaptcha;
     if (grecaptcha) {
       this._reCaptchaId = grecaptcha.render(this.captchaRef2.nativeElement, {
         'sitekey': this.SITE_ID,
         'callback': (resonse) => this.reCapchaSuccess(resonse),
         'expired-callback': () => this.reCapchaExpired()
      });
    }
  }

  onSubmit() {

    const formValue = this.landingForm.value;
    let empleados = this.landingForm.get('empleados').value;
    let paises = this.landingForm.get('pais').value;
    let intercontacto: IContacto;
   let provenienteDes=this.router.url.replace('/','');
   if(this.validateEmail(formValue.email)!=0){


    return false;
    
       }
    intercontacto = {
      nombre: formValue.nombre,
      email: formValue.email,
      empresa: formValue.empresa,
      telefono: formValue.telefono,
      no_empleados: empleados,
      pais: paises,
      mensaje: formValue.mensaje,
      provenienteDe:  provenienteDes

    };  
     if((formValue.nombre=='')|| (formValue.email=="") || (formValue.empresa=="") ||(formValue.telefono=="")||(formValue.telefono==null) || (paises=='') ||(empleados=='') || (formValue.mensaje== null)||(formValue.mensaje=="")) {
      Swal.fire({
         
        icon: 'error',
         title: 'Por favor verifique alguno de estos campos que se encuentra vac\u00CDo:\n  <ul style="list-style-position: inside;"><li> Email</li>\n <li>Nombre</li>\n <li>Empresa</li>\n <li>Tel\u00E9fono</li>\n <li>Empleados</li>\n <li>Pa\u00EDs</li>\n <li>Mensaje</li></ul>',
        showConfirmButton: false,
        timer: 2000
      });   
      return false;
         }
   if (formValue.acceptTerms === true) {
    if (intercontacto.mensaje== null) {
      intercontacto.mensaje="  ";
      }
     // Swal.showLoading();
      this.backendService.sendtoemail(intercontacto).subscribe((res) => {
        Swal.fire({
         
          icon: 'success',
          title: 'Mensaje enviado',
          showConfirmButton: false,
          timer: 1500
        })

        setTimeout(function(){

          window.location.reload();


        },1500)
     /*   this.formVisible = false;
        this.formInfo = {
          show: true,
          type: 'success',
          head: '¡Mensaje enviado!',
          text: 'Gracias, Nos pondremos en contacto contigo a la brevedad'
        };
        setTimeout(() => {
          this.formInfo.show = false;
        }, 3000);*/
            console.log(res +"proceso ejecutado")
      });
    } else {
      Swal.fire({
         
        icon: 'error',
        title: 'Debe aceptar los términos y condiciones',
        showConfirmButton: false,
        timer: 1500
      })
      return false;
    }
   

    let date = new Date;
    let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let month = months[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear();
    let timestamp = `${day}/${month}/${year}`;
    this.landingForm.get('timestamp').setValue(timestamp);
    if (isPlatformBrowser(this.platformId)) {
      this.landingForm.get('referrer').setValue(this.router.url);
    }

   /* this.db.collection("uxcontactos").add(this.landingForm.value).then(resp => {
      if (isPlatformBrowser(this.platformId)) {
        console.log(resp);
        console.log('Data saved!!');

        this.formVisible = false;
        this.formInfo = {
          show: true,
          type: 'success',
          head: '¡Mensaje enviado!',
          text: 'Gracias, Nos pondremos en contacto contigo a la brevedad'
        };
        setTimeout(() => {
          this.formInfo.show = false;
        }, 3000);

      }
      this.landingForm.reset();
      this.landingForm.get('campana').setValue('home');
      this.landingForm.get('version').setValue('1');
      this.landingForm.get('referrer').setValue(document.referrer);
    });*/

  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  };


   reCapchaSuccess(data:any){
     if(data){
      console.log("Congratulation! reCAPTCHA verified.")
    }
   }

   reCapchaExpired(){
     alert("Oops! reCAPTCHA expired.")
   }

   validateEmail(emailes){
    let bandera: number;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(gmail.in|gmail.com|hotmail.com|outlook.com|yahoo.com|live.com|aol.com)$/; 
    if ((emailes.toLowerCase().match(validRegex))) {  
      Swal.fire({
         
        icon: 'error',
        title: 'Por favor ingrese una direcci\u00F3n de correo v\u00E1lida y de empresa.',
        showConfirmButton: false,
        timer: 1500
      });  
     bandera=1;
  }  else{
bandera=0;
return bandera; 

  }
  }

}
