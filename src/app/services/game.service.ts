import {Injectable} from '@angular/core';
import {HubConnection} from '@microsoft/signalr';
import {HubConnectionBuilder} from '@microsoft/signalr/dist/esm/HubConnectionBuilder';
import {AuthService} from './auth.service';

@Injectable({
   providedIn: 'root',
})
export class GameService {
   private _hubConnection!: HubConnection;

   /* game.service est un singleton, il faut créer un observable */

   constructor(private readonly _authSercie: AuthService) {
      this._authSercie.connectedUser$.subscribe(user => {
         // si user est égal à null, il est déconnecté, on le déconnecte
         if (user == null) {
            this._hubConnection?.stop();
         } else {
            const builder = new HubConnectionBuilder()
               .withUrl('http://localhost:5290/hubs/game', {
                  accessTokenFactory: () => user,
               })
               .withAutomaticReconnect();

            this._hubConnection = builder.build();
            this._hubConnection.start().then(() => {
               this._hubConnection.on('allTables', console.log);
            });
         }
      });
   }

   create() {
      this._hubConnection.send('create');
   }
}
