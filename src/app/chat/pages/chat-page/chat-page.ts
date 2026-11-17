import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatMessageComponent, MyMessageComponent, TypingLoaderComponent, TextMessageBoxComponent } from '@shared/components';
import { Message } from '@shared/interfaces';

@Component({
  selector: 'app-chat-page',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
  ],
  templateUrl: './chat-page.html',
})
export class ChatPage {
  public messages = signal<Message[]>([]);
  public isLoading = signal(false);

  handleMessage( prompt: string ) {
    this.isLoading.set(true);
    this.messages.update( prev => [...prev, { text: prompt, isLLM: false }] );

    console.log({ prompt });
  }
}
