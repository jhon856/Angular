import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  answers: any;
  constructor(private _data: DataService) {

  }

  ngOnInit() {
    this._data.answer.subscribe(res => this.answers = res);
  }

}
