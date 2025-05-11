export class LivrosService {
  private storageKey = 'livros';

  listarLivros(): any[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  adicionarLivro(livro: any) {
    const livros = this.listarLivros();
    livros.push({ ...livro, emprestado: false });
    localStorage.setItem(this.storageKey, JSON.stringify(livros));
  }

  emprestarLivro(titulo: string): boolean {
    const livros = this.listarLivros();
    const livro = livros.find(l => l.titulo === titulo && !l.emprestado);
    if (!livro) return false;

    livro.emprestado = true;
    localStorage.setItem(this.storageKey, JSON.stringify(livros));
    return true;
  }

  devolverLivro(titulo: string): boolean {
    const livros = this.listarLivros();
    const livro = livros.find(l => l.titulo === titulo && l.emprestado);
    if (!livro) return false;

    livro.emprestado = false;
    localStorage.setItem(this.storageKey, JSON.stringify(livros));
    return true;
  }
}
