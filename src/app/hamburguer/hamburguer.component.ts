import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburguer',
  templateUrl: './hamburguer.component.html',
  styleUrls: ['./hamburguer.component.scss']
})
export class HamburguerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  	const open = document.querySelector('.open');
  	let list_items = document.querySelectorAll('#subb');
  	let overlay = document.querySelector('.overlay');
  	// let plus = document.getElementById('iplus');
  	let aTags = open.getElementsByClassName('ilink');



  	// Show and Hide sidebar when click icon
  	let toggles = document.querySelectorAll(".c-hamburger");

	for (let i = toggles.length - 1; i >= 0; i--) {
	  let toggle = toggles[i];
	  toggleHandler(toggle);
	};

	function toggleHandler(toggle) {

	  toggle.addEventListener("click", function(e) {
	    e.preventDefault();
	    if (this.classList.contains("is-active") === true) {
	      this.classList.remove("is-active");
	      open.classList.remove('oppenned');
	      overlay.className = 'overlay';
	      

	    } else {
	      this.classList.add("is-active");
	      open.classList.add('oppenned');
	      overlay.className += ' open';
	    }
	  });

	  window.addEventListener('click', function(event){
	    if(event.target === overlay){
	      toggle.classList.remove("is-active");
	      open.classList.remove('oppenned');
	      overlay.className = 'overlay';
	    }
	  });





		// Show and Hide the hidden Submenu ul
		for (let i = 0; i < list_items.length; i++) {
		  list_items[i].addEventListener("click", show);
		}

		function show(e) {

		  e.stopPropagation();
		  this.classList.toggle("myClass");
		  // plus.classList.toggle("rotate");
		}



	    // hide sidebar off canvas when click a menu link
	    for (let i = 0; i < aTags.length; i++) {
		  aTags[i].addEventListener("click", close);
		}

		function close(e) {
			e.stopPropagation();
			open.classList.remove('oppenned');
			toggle.classList.remove("is-active");
			overlay.className = 'overlay';
		}


	}

  }



}
