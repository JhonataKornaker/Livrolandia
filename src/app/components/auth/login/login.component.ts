import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  senha = '';

  @Output() toggle = new EventEmitter<void>();
  @Output() showModal = new EventEmitter<string>(); // Emite a mensagem para o componente pai

  constructor(private authService: AuthService, private router: Router) {}

  onSwitchToRegister() {
    this.toggle.emit();
  }

  logarUser() {
    if (!this.email || !this.senha) {
      this.showModal.emit('Preencha todos os campos'); // Chama a função do modal do pai
      return;
    }

    const sucesso = this.authService.logar(this.email, this.senha);
    if (sucesso) {
      this.router.navigate(['/home']);
    } else {
      this.showModal.emit('Email ou senha inválidos.'); // Chama a função do modal do pai
    }
  }
}
