import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  email = '';
  senha = '';
  nome = '';
  mensagem = '';

  constructor(private authService: AuthService, private router: Router) {}

  @Output() toggle = new EventEmitter<void>();
  @Output() showModal = new EventEmitter<string>();

  onSwitchToLogin() {
    this.toggle.emit();
  }

  cadastrar() {
    if (!this.email || !this.senha || !this.nome) {
      this.showModal.emit('Preencha todos os campos');
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    if (!emailValido) {
      this.showModal.emit('Preencha um email válido');
      return;
    }

    if (this.senha.length < 6) {
      this.showModal.emit('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    const sucesso = this.authService.cadastrar({
      email: this.email,
      senha: this.senha,
      nome: this.nome,
    });

    if (sucesso) {
      this.router.navigate(['/home']);
    } else {
      this.showModal.emit('Email já foi cadastrado');
      return;
    }
  }
}
