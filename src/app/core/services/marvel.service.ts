import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from "../../../environment/environment"
import md5 from 'md5';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  constructor(

  ) {}
  baseUrl = environment.baseUrl
  privateKey = environment.privateKey
  publicKey = environment.publicKey
  http = inject(HttpClient)

  getListCharacteresMarvel() {
    const ts = new Date().getTime().toString();
    const hash = md5(ts + this.privateKey + this.publicKey);

    let params = new HttpParams()
      .set('ts', ts)
      .set('apikey', this.publicKey)
      .set('hash', hash);

    return this.http.get(this.baseUrl, { params });
  }
}
