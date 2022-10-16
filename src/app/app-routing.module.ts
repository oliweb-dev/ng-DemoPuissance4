import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IsLoggedGuard} from './guards/is-logged.guard';
import {GameComponent} from './pages/game/game.component';
import {LoginComponent} from './pages/login/login.component';

const routes: Routes = [
   {path: '', redirectTo: 'game', pathMatch: 'full'},
   {path: 'login', component: LoginComponent},
   {path: 'game', component: GameComponent, canActivate: [IsLoggedGuard]},
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
