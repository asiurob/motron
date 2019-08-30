import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'siurob';

  showNavigationArrows = true;
  showNavigationIndicators = true;
  images = [1, 2, 3, 4, 5].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  math: Math = Math;

  ngOnInit() {
    console.log( this.images );
  }
}
