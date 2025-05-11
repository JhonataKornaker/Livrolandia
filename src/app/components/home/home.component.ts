import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private authService: AuthService, private router: Router){}

  onDeslogarUser() {
    this.authService.deslogar();
    this.router.navigate([''])
  }
}
