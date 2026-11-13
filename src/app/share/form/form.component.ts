import { Component, OnInit, ElementRef, ViewChild, Inject, AfterViewInit, PLATFORM_ID } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SendmailService } from './../../services/sendmail.service';
import { IContacto } from '././../../pages/contacto/contacto/contacto';
import Swal  from 'sweetalert2';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent implements OnInit {

  landingForm: FormGroup;
  nombre: string;
  email: string;
  telefono: number;
  empresa: string;
  no_empleados: string;
  pais: string;
  mensaje: string; 
  provenienteDe: string;
  formVisible: boolean = false;
  formInfo: any =
    {
      show: false,
      type: '',
      head: '',
      text: ''
    }

  public href: string = "";

  public showContent: boolean = false;


  @ViewChild('captchaRef2') captchaRef2: ElementRef;

  @Inject(Number) private _reCaptchaId: number;
   @Inject(String) private SITE_ID: string = '6LcFxgkcAAAAAA6PfB1MpEBjV0l91oijQjXNsEB4';
 //@Inject(String) private SITE_ID: string = '6Lc1uAkcAAAAAEph28kkwRTy1j6UrmtmD6ODY9qg';



  constructor(
    private fb: FormBuilder,
    public db: AngularFirestore,
    private title: Title,
    private meta: Meta,private backendService: SendmailService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object

    ) { }

  ngOnInit(): void{
    // setTimeout(()=>this.showContent=true, 3000);
    let select = document.getElementById('select1');
    select.onchange = function () {
        select.style.color = 'white';
    }

    this.href = this.router.url;
    console.log('Hola ' + this.href);
    this.landingForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(/^([a-zA-Z ]|[à-ú]|[À-Ú])+$/)]],
      // email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      email: ['', [Validators.required]], //Validators.pattern(/^([\w-.]+@(?!gmail\.com)(?!yahoo\.com)(?!hotmail\.com)([\w-]+.)+[\w-]{2,})?$/)]],
      telefono: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(13), Validators.pattern(/^[0-9 ]*$/)])],
      empresa: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
      mensaje: ['', [Validators.minLength(1), Validators.maxLength(250)]],
      empleados: ['', Validators.required],
      pais: ['', Validators.required],
      acceptTerms: ['', Validators.required],
      recaptchaReactive: ['', Validators.required],
      timestamp: [''],
      campana: ['home'],
      version: ['1'],
      referrer: [this.router.url]
    });
    /*this.landingForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(/^([a-zA-Z ]|[à-ú]|[À-Ú])+$/)]],
      // email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      email: ['', [Validators.required, Validators.pattern(/^([\w-.]+@(?!gmail\.com)(?!yahoo\.com)(?!hotmail\.com)([\w-]+.)+[\w-]{2,})?$/)]],
      telefono: [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(13), Validators.pattern(/^[0-9 ]*$/)])],
      empresa: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
      mensaje: ['', [Validators.minLength(1), Validators.maxLength(250)]],
      empleados: ['', Validators.required],
      pais: ['', Validators.required],
      acceptTerms: ['', Validators.required],
      recaptchaReactive: ['', Validators.required],
      timestamp: [''],
      campana: ['home'],
      version: ['1'],
      referrer: [this.router.url]
    });*/

    

  }
  icontacto : IContacto=<IContacto>{};
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

   if ( provenienteDes==""){
    provenienteDes="formulario principal";
    }else{
      provenienteDes=provenienteDes;

    }
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
      //Swal.showLoading();
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

      //console.log(res +"proceso ejecutado")
     /* this.formVisible = false;
      this.formInfo = {
        show: true,
        type: 'success',
        head: '¡Mensaje enviado!',
        text: 'Gracias, Nos pondremos en contacto contigo a la brevedad'
      };
      setTimeout(() => {
        this.formInfo.show = false;
      }, 3000);*/
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

    return false;
    

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

    this.db.collection("uxcontactos").add(this.landingForm.value).then(resp => {
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
    });

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
  openContact() {
    if (this.formVisible == false) {
      this.formVisible = true;
      this.formInfo =
      {
        show: false,
        type: '',
        head: '',
        text: ''
      }
    } else {
      this.formVisible = false;
    }
  }

  reCapchaSuccess(data:any){
    if(data){
      console.log("Congratulation! reCAPTCHA verified.")
    }
  }

  reCapchaExpired(){
    alert("Oops! reCAPTCHA expired.")
  }

}