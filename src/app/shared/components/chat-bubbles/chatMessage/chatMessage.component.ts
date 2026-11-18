import { Component, input } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';

@Component( {
  selector: 'app-chat-message',
  imports: [MarkdownComponent],
  templateUrl: './chatMessage.component.html',
} )
export class ChatMessageComponent {

  text = input.required<string>();

  audioUrl = input<string | undefined>();

  imageInfo = input<{ url: string, alt: string } | undefined>();

}
