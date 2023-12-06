import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Customized Components';

  items = [
    { name: 'HTML', percent: 90 },
    { name: 'CSS', percent: 60 },
    { name: 'jQuery', percent: 85 },
    { name: 'Python', percent: 50 },
    { name: 'MySQL', percent: 75 },
  ];
}
