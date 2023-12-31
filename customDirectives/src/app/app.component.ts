import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customDirectives';
  active: boolean = false;

  display: boolean = false;
  displayNotice() {
    this.display = true;
  }

  occupation: string = 'designer';
}
