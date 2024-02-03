import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { datafake } from '../../data/DataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, RouterModule, HomeComponent,BigCardComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{

  constructor( private route: ActivatedRoute ){

  }

  @Input()
  contitulo:String = "";
  @Input()
  confoto:String =""
  @Input()
  condescricao:String="";
   @Input()
   private id:String | null = "0"

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
     this.id =  value.get("id")
      )
    this.setValoresComponet(this.id)
    }

  setValoresComponet(id:String | null){
    const result = datafake.filter(artigo => artigo.id == id)[0]

      this.confoto = result.photo;
      this.contitulo = result.title;
      this.condescricao = result.description;

  }
}
