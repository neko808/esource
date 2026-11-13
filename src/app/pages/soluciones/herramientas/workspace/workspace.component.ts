import { Component, OnInit } from '@angular/core';
import { Meta, Title, DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { FormComponent } from '../../../../share/form/form.component';
import { BannerComponent } from '../../../../share/banner/banner.component';
import { IframeService } from '../../../../services/iframe.service';


@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer,
    public iframeService: IframeService
  ) { }

  ngOnInit(): void {

    this.title.setTitle('Google Workspace');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Una plataforma de colaboración en linea para pequeñas y grandes empresas que integra todos los productos de Google' 
    })
    this.meta.updateTag({
      name: 'keywords',
      content: 'Google Workspace, Migración, instituciones financieras, bancos, Cloud journey, integración, eSource Capital, Google Cloud Partner Premier, Gmail, Drive, Google Calendar, Google chat, Google meet, Google forms, Google sites, Google vault, Google groups, Google docs, Google sheets, Google slides, SaaS'
    })

    /*       TABS GOOGLE TOOLS       */
    const TABS = document.querySelectorAll('.tabs li');
    const CONTENT = document.querySelectorAll('.tab-content menu');
    const ACTIVE_CLASS = 'is-active';
    const ACTIVE_SHADOW = 'has-active';

    function initTabs() {
        TABS.forEach((tab) => {
          tab.addEventListener('click', (e) => {
            let selected = tab.getAttribute('data-tab');
            updateActiveTab(tab);
            updateActiveContent(selected);
          })
        })
    }

    function updateActiveTab(selected) {
      TABS.forEach((tab) => {
        if (tab && tab.classList.contains(ACTIVE_CLASS)) {
          tab.classList.remove(ACTIVE_CLASS);
          tab.classList.remove(ACTIVE_SHADOW);
        }
      });
      selected.classList.add(ACTIVE_CLASS);
      selected.classList.add(ACTIVE_SHADOW);
    }

    function updateActiveContent(selected) {
      CONTENT.forEach((item) => {
        if (item && item.classList.contains(ACTIVE_CLASS)) {
          item.classList.remove(ACTIVE_CLASS);
        }
        let data = item.getAttribute('data-content');
        if (data === selected) {
          item.classList.add(ACTIVE_CLASS);
        }
      });
    }

    initTabs();


    /*    SHOW MODALS   */
    const triggers = document.getElementsByClassName('trigger');
    const triggerArray = Array.from(triggers).entries();
    const modals = document.getElementsByClassName('modal');
    const closeButton = document.getElementsByClassName('btn-close');

    const myPlayer = document.getElementById('player');

    for (let [index, trigger] of triggerArray) {
      let triggerIndex = index;
      function toggleModal() {
        modals[triggerIndex].classList.toggle('show-modal');
      }
      trigger.addEventListener("click", toggleModal);
      closeButton[triggerIndex].addEventListener("click", toggleModal);
      closeButton[triggerIndex].addEventListener("click", function(){

      });

    }

    /*     COUNTER       */
    var konditionen = gsap.timeline();
            
    const observerElement = document.querySelector('.table');
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    function handleIntersect(entry) {
      
      if (entry[0].intersectionRatio > 0) {
          konditionen.from(".figure span", {
          duration: 2,
          ease: "none",
          innerText: 0,
          roundProps: "innerText",
            onUpdate: function() {
                this.targets().forEach(target => {
                    const val = gsap.getProperty(target, "innerText");
                });
            },
        });
      } else {
      }
    }

    observer.observe(observerElement);

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


  closeVideo(){
    let myPlayer = document.getElementById('player');
    myPlayer.setAttribute("src", " ");
    myPlayer.setAttribute("src", "https://www.youtube.com/embed/EUjWFr3w7RU");
    console.log('video is closed now!');
  }

  closeVideo1(){
    let myPlayer = document.getElementById('player1');
    myPlayer.setAttribute("src", " ");
    myPlayer.setAttribute("src", "https://www.youtube.com/embed/702Hn_tU4FE");
    console.log('video is closed now!');
  }

  closeVideo2(){
    let myPlayer = document.getElementById('player2');
    myPlayer.setAttribute("src", " ");
    myPlayer.setAttribute("src", "https://www.youtube.com/embed/tOxm9xUBKvI");
    console.log('video is closed now!');
  }


  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  };


}
