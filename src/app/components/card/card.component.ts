import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() title: string = 'Titulo do Card';
  @Input() description: string = 'Descrição do Card';
  @Input() ano: string = 'Ano';
  @Input() image?: string;
  @Input() buttonTextSinopse: string = 'Ver Sinopse';
  @Input() buttonTextEmprestar: string = 'Emprestar';

  @Output() verSinopse = new EventEmitter<void>();
  @Output() emprestarLivro = new EventEmitter<void>();

  onVerSinopse() {
    this.verSinopse.emit();
  }

  onEmprestar() {
    this.emprestarLivro.emit();
  }
}
