import { Component } from '@angular/core';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { TituloComponent } from '../../components/titulo/titulo.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BigCardComponent, TituloComponent, SmallCardComponent, MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
