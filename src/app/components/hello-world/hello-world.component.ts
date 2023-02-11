import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.sass']
})
export class HelloWorldComponent {
  message: string = "Hello, World!";
}
