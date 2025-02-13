import { Component } from '@angular/core';
import { Person } from './people/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: Person[] = [];

  //people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];
  people: Person[] = [
    new Person('lewis', true),
    new Person('jules', false),
    new Person('ed', true),
    new Person('nathan', false),
    new Person('dave', true),
    new Person('nigel', false),
  ];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(new Person(this.newFriend, false));
    this.newFriend = null;
  }

  // This toggles favorite status on and off. No reason to make two separate functions that do the same thing ¯\_(ツ)_/¯
  setFavorite(person: Person) {
    person.favorite = !person.favorite;
    this.favorites.push(person);
  }

  listFavorites(): string {
    return this.people.filter((p) => p.favorite).map((person) => person.name).join(', ');
  }
}
