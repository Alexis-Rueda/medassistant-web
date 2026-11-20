
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Request } from '@shared/interfaces';
import { Observable } from 'rxjs';

const API_URL = environment.apiUrl + '/v1';

@Injectable({ providedIn: 'root' })
export class ChatService {

  private http = inject(HttpClient);

  sentChatMessage(message: Request): Observable<string> {
    return this.http.post<string>(
      `${API_URL}/chat`,
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

}
