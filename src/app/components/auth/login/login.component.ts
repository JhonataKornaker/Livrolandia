import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = '';
  senha = '';

  constructor(private authService: AuthService, private router: Router){}

  @Output() toggle = new EventEmitter<void>();

  onSwitchToRegister() {
    this.toggle.emit();
  }

  logarUser() {
    console.log('Método logarUser chamado');

    if (!this.email || !this.senha) {
      alert('Preencha todos os campos');
      return;
    }
    const sucesso = this.authService.logar(this.email, this.senha);

    if (sucesso) {
    this.router.navigate(['/home']);
  } else {
    alert('Email ou senha inválidos.');
  }
  }
}
