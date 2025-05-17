import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colecao-livro',
  templateUrl: './colecao-livro.component.html',
  styleUrl: './colecao-livro.component.css'
})
export class ColecaoLivroComponent {

  livros = [
    {
      title: 'Ousider',
      description: 'Stephen King',
      ano: '2018',
      image: 'assets/img_card/img_card_01.png'
    },
    {
      title: 'O médico e o monstro',
      description: 'Robert Louis Stevenson',
      ano: '2019',
      image: 'assets/img_card/img_card_02.png'
    },
    {
      title: 'Ninguém vai te ouvir gritar',
      description: 'Mark Miller',
      ano: '2023',
      image: 'assets/img_card/img_card_03.png'
    },
    {
      title: 'A estranha sally diamond',
      description: 'Liz Nugent',
      ano: '2023',
      image: 'assets/img_card/img_card_12.png'
    },
    {
      title: 'Introdução à Linguagem SQL',
      description: 'Thomas Nield',
      ano: '2016',
      image: 'assets/img_card/img_card_04.png'
    },
    {
      title: 'Arquitetura Limpa',
      description: 'Robert C. Martin',
      ano: '2019',
      image: 'assets/img_card/img_card_05.png'
    },
    {
      title: 'Entendendo Algoritmos',
      description: 'Aditya Y. Bhargava',
      ano: '2017',
      image: 'assets/img_card/img_card_06.png'
    },
    {
      title: 'Manual de DevOps',
      description: 'Gene Kim, Jez Humble, John Willis',
      ano: '2018',
      image: 'assets/img_card/img_card_07.png'
    },
    {
      title: 'A rainha vermelha',
      description: 'Victoria Aveyard',
      ano: '2015',
      image: 'assets/img_card/img_card_08.png'
    },
    {
      title: 'A cinco passos de você',
      description: 'Rachael Lippincott',
      ano: '2019',
      image: 'assets/img_card/img_card_09.png'
    },
    {
      title: 'A culpa é das estrelas',
      description: 'John Green',
      ano: '2014',
      image: 'assets/img_card/img_card_10.png'
    },
    {
      title: 'É assim que acaba',
      description: 'Colleen Hoover',
      ano: '2018',
      image: 'assets/img_card/img_card_11.png'
    },
    
  ]
}
