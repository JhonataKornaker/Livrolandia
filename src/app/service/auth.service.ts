import { Injectable } from '@angular/core';

interface Usuario {
  email: string;
  senha: string;
  nome: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private storageKey = 'usuarios';
  private logadoKey = 'usuarioLogado';

  private getUsuarios(): Usuario[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  private setUsuarios(usuarios: Usuario[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
  }

  cadastrar(usuario: Usuario): boolean {
    const usuarios = this.getUsuarios();

    const existe = usuarios.some(u => u.email === usuario.email);
    if (existe) {
      return false;
    }

    usuarios.push(usuario);
    this.setUsuarios(usuarios);
    this.setUsuarioLogado(usuario);
    return true;
  }

  logar(email: string, senha: string): boolean {
    const usuarios = this.getUsuarios();
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);

    if (usuario) {
      this.setUsuarioLogado(usuario);
      return true;
    }

    return false;
  }

  deslogar(): void {
    localStorage.removeItem(this.logadoKey);
  }

  usuarioLogado(): Usuario | null {
    return JSON.parse(localStorage.getItem(this.logadoKey) || 'null');
  }

  private setUsuarioLogado(usuario: Usuario): void {
    localStorage.setItem(this.logadoKey, JSON.stringify(usuario));
  }
}
