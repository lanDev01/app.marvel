import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CharactersListComponent } from '../../components/characters-list/characters-list.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CharactersListComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
