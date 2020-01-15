import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['./app.component.css',`
    .hideText {
      visibility: hidden;
    }
  `],
  styleUrls:[
    './app.component.css'
]
})
export class AppComponent {

  hideText = true;
  logs = [];

  constructor(){

  }

  toggle(){
    this.hideText = !this.hideText;
    this.logs.push(Date());
  }

}
