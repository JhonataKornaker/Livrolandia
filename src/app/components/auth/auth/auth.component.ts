import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  isRegister = false;
  showModal = false;
  modalMessage = '';

  toggleMode() {
    this.isRegister = !this.isRegister;
  }

  openModal(message: string) {
    this.modalMessage = message; // Define a mensagem do modal
    this.showModal = true; // Exibe o modal
  }

  closeModal() {
    this.showModal = false; // Fecha o modal
  }
}
