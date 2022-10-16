import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';

@Component({
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
   username!: string;

   constructor(private readonly _authService: AuthService, private readonly _router: Router) {}

   ngOnInit(): void {}

   login() {
      this._authService.login(this.username);
      this._router.navigate(['']);
   }
}
