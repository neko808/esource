import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // todaydate;


  constructor(
  	private myservice: MyserviceService
  ) {

  }

  ngOnInit(): void {


    // setTimeout(() => {
    //  this.todaydate = this.myservice.todayDate();
    // }, 3000);
  	

  }


}
