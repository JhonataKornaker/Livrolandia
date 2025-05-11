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
    if (!this.email || !this.senha) {
      this.mensagem = 'Preencha todos os campos.';
      alert('Preencha todos os campos');
      return;
    }

    const sucesso = this.authService.cadastrar({email: this.email, senha: this.senha, nome: this.nome})
    this.mensagem = sucesso ? 'Cadastro realizado com sucesso!' : 'Email já cadastrado.'

    if(sucesso) {
      this.router.navigate(['/home'])
    } else {
      alert('Email ja foi cadastrado')
    }
  }
}
