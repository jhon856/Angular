import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('answers', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true}),
        query(':leave', stagger('300ms', [
            animate('1.2s ease-in-out', keyframes([
              style({opacity: 1, transform: 'translateY(0)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
              style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
            ]))]), {optional: true})
      ])
    ])

  ]
})
export class HomeComponent implements OnInit {
  answerDisplay: String = '';
  ShowSpinner = false;
  answer: String = '';
  answers = [] ;

  constructor(private _data: DataService) {

  }
  ngOnInit() {
    this._data.answer.subscribe(res => this.answers = res);
    this._data.changeDev(this.answers);
  }
  showAnswer () {
    if (this.answer) {
    this.ShowSpinner = true;

    setTimeout(() => {
      this.answerDisplay = this.answer;
      this.ShowSpinner = false;
      this.answers.push(this.answer);
      this.answer = '';
      this._data.changeDev(this.answers);
    }, 500);
  }
}

  removeItem(i) {
    this.answers.splice(i, 1);
    this._data.changeDev(this.answers);
  }
}
