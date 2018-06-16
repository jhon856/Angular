import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class DataService {

  private answers = new BehaviorSubject<any>([]);
  answer = this.answers.asObservable();
  constructor() { }

  changeDev(answer) {
    this.answers.next(answer);
  }

}
