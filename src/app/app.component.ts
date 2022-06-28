import { Component } from '@angular/core';
import { PostsService } from './core/api/v1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'openapi-angular-poc';
  posts$ = this.postService.getPosts();

  // Inject the generated Angular service as a dependency of this class
  constructor(private postService: PostsService) {}
}
