import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  email = '';
  senha = '';
  nome = '';
  mensagem = '';

  constructor(private authService: AuthService, private router: Router){}

  @Output() toggle = new EventEmitter<void>();

  onSwitchToLogin() {
    this.toggle.emit();
  }

cadastrar() {
  if (!this.email || !this.senha || !this.nome) {
    alert('Preencha todos os campos');
    return;
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
  if (!emailValido) {
    alert('Digite um e-mail válido');
    return;
  }

  if (this.senha.length < 6) {
    alert('A senha deve ter pelo menos 6 caracteres.');
    return;
  }

  const sucesso = this.authService.cadastrar({
    email: this.email,
    senha: this.senha,
    nome: this.nome
  });

  if (sucesso) {
    this.router.navigate(['/home']);
  } else {
    alert('Email já foi cadastrado');
  }
}

}
