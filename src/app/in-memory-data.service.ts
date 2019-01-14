import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      { id: 11, name: 'Searching' },
      { id: 12, name: 'La La Land' },
      { id: 13, name: 'The Dark Knight' },
      { id: 14, name: 'Marsian' },
      { id: 15, name: 'Mr. Nobody' },
      { id: 16, name: 'Meg' },
      { id: 17, name: 'Mad Max' },
      { id: 18, name: 'Alfa' },
      { id: 19, name: 'Jurassic World: Fallen Kingdom' },
      { id: 20, name: 'Alien' },
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