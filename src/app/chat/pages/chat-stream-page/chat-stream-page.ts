import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatMessageComponent, MyMessageComponent, TypingLoaderComponent, TextMessageBoxComponent } from '@shared/components';
import { Message } from '@shared/interfaces';
import { ChatService } from '../../chat.service';

@Component({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
  ],
  templateUrl: './chat-stream-page.html',
})
export class ChatStreamPage {
  public messages = signal<Message[]>([]);
  public isLoading = signal(false);
  public streamStarted = signal(false);

  private chatService = inject(ChatService);

  handleMessage( prompt: string ) {
    this.isLoading.set(true);
    this.streamStarted.set(false);
    this.messages.update( prev => [...prev, { text: prompt, isLLM: false }] );
    const messageIndex = this.messages().length;

    this.chatService.sentChatStreamMessage({ prompt, model: 'gemini' }).subscribe({
      next: (text) => {
        this.streamStarted.set(true);
        this.messages.update( prev => [
          ...prev.slice(0, messageIndex),
          { text, isLLM: true },
        ] );
      },
      complete: () => this.isLoading.set(false),
      error: () => this.isLoading.set(false),
    });
  }
}
