import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IframeService {

  // private srcSubject = new Subject<string>();
  private srcSubject = new BehaviorSubject<string>(null);

  srcObservable$: Observable<string> = this.srcSubject.asObservable();

  constructor() { }

  changeSrc(incomingSrc) {
    this.srcSubject.next(incomingSrc);
  }



}
