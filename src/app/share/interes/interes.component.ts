import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interes',
  templateUrl: './interes.component.html',
  styleUrls: ['./interes.component.scss']
})
export class InteresComponent implements OnInit {
  imgRef:string = '../../../../../../../assets/img/';

  @Input() intereses

  constructor() { }

  ngOnInit(): void {
  }

}
