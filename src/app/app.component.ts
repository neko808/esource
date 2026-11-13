import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MyserviceService } from './myservice.service';
import { Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private myservice: MyserviceService,
    private metaTagService: Meta,
    private translate: TranslateService
  ){ translate.addLangs(['es','en']);
     translate.setDefaultLang('es'); }

  ngOnInit(): void{


    //restore scroll to top after clicking a link
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
	
  }

  ngAfterViewInit(): void{
  }

}
