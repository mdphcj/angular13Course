import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  videos = [
    { title: 'My Video 1', share: 415, likes: 257, dislikes: 12, thumbnail: 'assets/image1.jpeg' },
    { title: 'My Video 2', share: 215, likes: 325, dislikes: 15, thumbnail: 'assets/image2.jpeg' },
    { title: 'My Video 3', share: 513, likes: 105, dislikes: 17, thumbnail: 'assets/image3.jpeg' },
  ];

  mostLikedVideo = this.getMostLikedVideo();

  getMostLikedVideo() {
    let videosCopy = [...this.videos];
    return videosCopy.sort((curr, next) => next.likes - curr.likes)[0];
  }

}
