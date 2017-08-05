import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  words = [];

  constructor() {
    for (let i = 0; i < 5; i++) {
      let val = {
        'title': 'this is a title header',
        'description': 'this is the header paragraph '
      };
      val.description += i;
      if (i === 0) {
        val.description += ' and kyle really smells like dog buns';
      }
      this.words.push(val);
    }
  }

}
