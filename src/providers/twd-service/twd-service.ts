//import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

import "rxjs/add/operator/map";
/*
  Generated class for the TwdServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TwdServiceProvider {
  data: any;
  constructor(public http: HttpClient) {
    console.log("Hello HeroService");
  }

  load() {
    if (this.data) {

      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(
        'https://api.tvmaze.com/singlesearch/shows?q=the-walking-dead&embed=episodes'
      )
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

   getEpisodeById(id: number) {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http
        .get(`http://api.tvmaze.com/episodes/${id}`)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
}