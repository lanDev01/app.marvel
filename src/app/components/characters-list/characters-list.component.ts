import { Component, inject, OnInit } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { MarvelService } from '../../core/services/marvel.service';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { environment } from '../../../environment/environment';
import md5 from 'md5';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CardsComponent, HttpClientModule],
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent implements OnInit {
  data: any
  characters: any;
  baseUrl: string = environment.baseUrl;
  privateKey: string = environment.privateKey;
  publicKey: string = environment.publicKey;

  constructor() {}

  // marvelService = inject(MarvelService)
  http = inject(HttpClient)

  ngOnInit(): void {
    this.getListCharacteresMarvel();
  }

  getListCharacteresMarvel() {
    const ts = new Date().getTime().toString();
    const hash = md5(ts + this.privateKey + this.publicKey);

    let params = new HttpParams()
      .set('ts', ts)
      .set('apikey', this.publicKey)
      .set('hash', hash);

    this.http.get(this.baseUrl, { params }).subscribe(
      (res) => {
        this.data = res;
        this.characters = this.data.data.results
        console.log(this.characters)
      },
      (error) => {
        console.error('Error fetching characters', error);
      }
    );

    return this.http.get(this.baseUrl, { params });
  }
}
