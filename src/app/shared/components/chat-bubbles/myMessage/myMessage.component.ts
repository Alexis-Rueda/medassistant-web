import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component( {
  selector: 'app-my-message',
  imports: [
    CommonModule,
  ],
  templateUrl: './myMessage.component.html',
} )
export class MyMessageComponent {
  text = input.required<string>();
}
