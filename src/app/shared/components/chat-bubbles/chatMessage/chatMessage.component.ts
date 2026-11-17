import { Component, input } from '@angular/core';

@Component( {
  selector: 'app-chat-message',
  imports: [],
  templateUrl: './chatMessage.component.html',
} )
export class ChatMessageComponent {

  text = input.required<string>();

  audioUrl = input<string | undefined>();

  imageInfo = input<{ url: string, alt: string } | undefined>();

}
