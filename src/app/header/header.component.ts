import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
//For translate language
import { TranslateService } from '@ngx-translate/core'; 
import { IframeService } from '../services/iframe.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<boolean>();

  menu:boolean = false;


  constructor(private translate: TranslateService,
  			  private sanitizer: DomSanitizer,
  			  public iframeService: IframeService)
    { translate.addLangs(['es','en']);
      translate.setDefaultLang('es'); }

  ngOnInit(): void {

	window.onscroll = function() {
	    scrollFunction()
	};

	function scrollFunction() {
	  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
	    document.getElementById("header").classList.add('water');
	    document.getElementById("header").classList.add('basic');
	  } else {
	    document.getElementById("header").classList.remove('water');
	    document.getElementById("header").classList.remove('basic');
	  }
	}
  
  }



  first_url = "https://www.youtube.com/embed/4oP20QZxahk";
  second_url = "https://www.youtube.com/embed/Q_ZPBqVF0_8";
  current_url: SafeUrl;

  // updateSrc(url) {
  //   this.current_url=this.sanitizer.bypassSecurityTrustResourceUrl(url);
  // }

  updateSrc(url) {
      this.iframeService.changeSrc(this.sanitizer.bypassSecurityTrustResourceUrl(url));
  }


  useLanguage(language: string): void {
    this.translate.use(language); 
  }



}
