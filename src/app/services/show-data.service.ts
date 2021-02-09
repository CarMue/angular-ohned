import { Injectable } from '@angular/core';
import { Show } from '../model/show';

@Injectable()
export class ShowDataService {

  shows: Show[ ] = [ ];

  constructor() {
    this.shows.push(new Show(1, 'Paw Patrol'));
    this.shows.push(new Show(2, 'Haus des Geldes'));
    this.shows.push(new Show(3, '4 Blocks'));
    this.shows.push(new Show(4, 'Vikings'));
  }

  saveShow(show: Show) {
    this.shows.push(show);
  }

  saveEditShow(show: Show) {
    this.shows.filter;
  }

  deleteShow(show: Show) {
    this.shows = this.shows.filter(s => s !== show);
  }
}