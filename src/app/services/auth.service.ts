import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
   providedIn: 'root',
})
export class AuthService {
   connectedUser$: BehaviorSubject<string | null>;

   constructor() {
      // Observable inialisé à null
      this.connectedUser$ = new BehaviorSubject<string | null>(null);
   }

   login(username: string) {
      this.connectedUser$.next(username);
   }

   logout() {
      this.connectedUser$.next(null);
      
   }
}
