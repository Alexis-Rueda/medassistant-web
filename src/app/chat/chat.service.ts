
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Request } from '@shared/interfaces';
import Keycloak from 'keycloak-js';
import { Observable } from 'rxjs';

const API_URL = environment.apiUrl + '/v1';

@Injectable({ providedIn: 'root' })
export class ChatService {

  private http = inject(HttpClient);
  private keycloak = inject(Keycloak);

  sentChatMessage(message: Request): Observable<string> {
    return this.http.post<string>(
      `${API_URL}/chat`,
      { prompt: message.prompt, model: message.model },
      { responseType: 'text' }
    );
  }

  sentChatStreamMessage(message: Request): Observable<string> {
    return new Observable<string>((subscriber) => {
      const controller = new AbortController();
      const url = `${API_URL}/chat/stream`;

      const run = async () => {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'text/event-stream',
            Authorization: `Bearer ${this.keycloak.token}`,
          },
          body: JSON.stringify({ prompt: message.prompt, model: message.model }),
          signal: controller.signal,
        });

        if (!response.ok || !response.body) {
          throw new Error(`Stream failed with status ${response.status}`);
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';
        let text = '';

        while (true) {
          const { value, done } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });

          // Cada frame SSE termina en línea en blanco
          let boundary = buffer.indexOf('\n\n');
          while (boundary !== -1) {
            const rawFrame = buffer.slice(0, boundary);
            buffer = buffer.slice(boundary + 2);

            text += this.parseSseFrame(rawFrame);
            subscriber.next(text);
            boundary = buffer.indexOf('\n\n');
          }
        }

        subscriber.complete();
      };

      run().catch((err) => {
        if (err instanceof DOMException && err.name === 'AbortError') {
          subscriber.complete();
        } else {
          subscriber.error(err);
        }
      });

      return () => controller.abort();
    });
  }

  // Une las líneas "data:" del frame; Spring escribe "data:" sin espacio
  // y re-emite los \n internos como líneas "data:" adicionales
  private parseSseFrame(rawFrame: string): string {
    const lines: string[] = [];

    for (const line of rawFrame.split('\n')) {
      if (line.startsWith(':')) continue;
      lines.push(line.startsWith('data:') ? line.slice(5) : line);
    }

    return lines.join('\n');
  }

  sentExplainMessage(message: Request): Observable<string> {
    return this.http.post<string>(
      `${API_URL}/chat/explain`,
      { prompt: message.prompt, model: message.model },
      { responseType: 'text' }
    );
  }

  sentSymptomsMessage(message: Request): Observable<string> {
    return this.http.post<string>(
      `${API_URL}/chat/symptoms`,
      { prompt: message.prompt, model: message.model },
      { responseType: 'text' }
    );
  }

  sentDiagnoseMessage(message: Request): Observable<string> {
    return this.http.post<string>(
      `${API_URL}/chat/diagnose`,
      { prompt: message.prompt, model: message.model },
      { responseType: 'text' }
    );
  }

  sentConsultMessage(message: Request): Observable<string> {
    return this.http.post<string>(
      `${API_URL}/chat/consult`,
      { prompt: message.prompt, model: message.model },
      { responseType: 'text' }
    );
  }

}
