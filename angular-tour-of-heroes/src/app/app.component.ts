import { Component, Input } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ruta= '/dashboard';
  title = 'Tour of Heroes';
  chk = false;


  getChk(): void {
    console.log(this.chk);
    if (this.chk) {
      this.ruta = '/heroes';
    } else {
      this.ruta = '/dashboard';
   }
  }
  }




