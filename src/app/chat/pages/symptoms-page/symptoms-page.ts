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
  templateUrl: './symptoms-page.html',
})
export class SymptomsPage {
  public messages = signal<Message[]>([]);
  public isLoading = signal(false);

  private chatService = inject(ChatService);

  handleMessage( prompt: string ) {
    this.isLoading.set(true);
    this.messages.update( prev => [...prev, { text: prompt, isLLM: false }] );

    this.chatService.sentSymptomsMessage({ prompt: prompt, model: 'gemini' }).subscribe({
      next: (response) => {
        this.messages.update( prev => [...prev, { text: response, isLLM: true }] );
        this.isLoading.set(false);
      }
    });
  }
}
