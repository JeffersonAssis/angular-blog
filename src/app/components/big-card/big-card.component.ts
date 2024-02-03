import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { datafake } from '../../data/DataFake';
@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {
  @Input()
  photoCover: String = ""
  @Input()
  cardTitulo: String = ""
  cardDescricao: String = ""
  @Input()
  id: String | null = "0"
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => this.id == value.get("id"))
    this.setValor(this.id)
  }
  setValor(id: String | null) {
    const result = datafake.filter(artigo => artigo.id == id)[0]
    this.cardDescricao = result.description;
    this.cardTitulo = result.title;
    this.photoCover = result.photo;
  }
}
