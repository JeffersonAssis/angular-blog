import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { datafake } from '../../data/DataFake';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  constructor(private router: ActivatedRoute) { }

  @Input()
  photoCover: String = ""
  @Input()
  cardTitulo: String = "defult"
  @Input()
  cardDescricao: String = ""
  @Input()
  id: String | null = "0"

  ngOnInit(): void {
    this.router.paramMap.subscribe(valor =>
      this.id == valor.get("id"))
    this.setValor(this.id)
  }

  setValor(id: String | null) {
    const result = datafake.filter(artigo => artigo.id == this.id)[0]
    this.photoCover = result.photo
    this.cardTitulo = result.title
    this.cardDescricao = result.description
  }
}
