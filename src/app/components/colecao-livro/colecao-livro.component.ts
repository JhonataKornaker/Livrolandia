import { Component } from '@angular/core';
import { livros } from '../../data/livros';

@Component({
  selector: 'app-colecao-livro',
  templateUrl: './colecao-livro.component.html',
  styleUrls: ['./colecao-livro.component.css']
})
export class ColecaoLivroComponent {

  selectedLivro: any = null;
  isModalOpen = false;
  livros = livros;

  isConfirmModalOpen = false;
  livroParaConfirmar: any = null;

  openModal(livro: any) {
    this.selectedLivro = livro;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  openConfirmModal(livro: any) {
    this.livroParaConfirmar = livro;
    this.isConfirmModalOpen = true;
  }

  closeConfirmModal() {
    this.isConfirmModalOpen = false;
    this.livroParaConfirmar = null;
  }

  confirmarEmprestimoOuDevolucao() {
    if (this.livroParaConfirmar) {
      this.livroParaConfirmar.emprestado = !this.livroParaConfirmar.emprestado;
    }
    this.closeConfirmModal();
  }
}
