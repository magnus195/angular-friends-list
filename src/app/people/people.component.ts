import {Component, EventEmitter, Input, Output} from '@angular/core';
import {of} from "rxjs";
import {NgIf} from "@angular/common";
import {Person} from "./person";

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  @Input() people: Person[] = [];
  @Output() personSelected = new EventEmitter<Person>();

  selectPerson(person: Person) {
    this.personSelected.emit(person);
  }

  protected readonly of = of;
}
