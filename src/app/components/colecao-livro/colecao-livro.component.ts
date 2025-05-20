import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { livros } from '../../data/livros';

@Component({
  selector: 'app-colecao-livro',
  templateUrl: './colecao-livro.component.html',
  styleUrl: './colecao-livro.component.css'
})
export class ColecaoLivroComponent {

  selectedLivro: any = null;
  isModalOpen = false;
  livros = livros;

  openModal(livro: any) {
    this.selectedLivro = livro;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}