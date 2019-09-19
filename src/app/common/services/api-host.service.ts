import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiHostService {
  public api: string = '/api';

  cancatUrl(url: string): string {
    return `${this.api}${url}`;
  }
}
