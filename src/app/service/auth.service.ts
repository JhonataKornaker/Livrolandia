import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class AuthService {
    private storageKey = 'usuarios';

    cadastrar(usuario: {email: string, senha: string, nome: string}): boolean {
        const usuarios = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
        if(usuarios.find((u: any) => u.email === usuario.email)) {
            return false;
        }
        usuarios.push(usuario);
        localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
        return true;
    }

    logar(email: string, senha: string): boolean {
        const usuarios = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
        const usuario = usuarios.find((u: any) => u.email === email && u.senha === senha);
        if(usuario) {
            localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
            return true;
        }
        return false;
    }

    deslogar() {
        localStorage.removeItem('usuarioLogado');
    }

    usuarioLogado() {
        return JSON.parse(localStorage.getItem('usuarioLogado') || 'null');
    }
}