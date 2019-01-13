import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' },
      { id: 21, name: 'Bandersnatch' },
      { id: 22, name: 'Bird Box' },
      { id: 23, name: 'Upgraded' },
      { id: 24, name: 'Rick and Morty' },
      { id: 25, name: 'Quiet place' },
      { id: 26, name: 'The Gurdians of the Galaxy' },
      { id: 27, name: 'Infinity Wars' },
      { id: 28, name: 'The lady in black' },
      { id: 29, name: 'Harry Potter' },
      { id: 30, name: 'Fantastic Beasts: The Crimes of Grindelwald' }
    ];
    return {movies};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 11;
  }
}