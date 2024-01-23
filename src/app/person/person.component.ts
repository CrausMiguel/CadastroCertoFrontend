import { Component, Inject } from '@angular/core';
import { PersonService } from './person.service';
import { Router } from '@angular/router';
import { IPerson } from './person';
import { IContact } from '../contact/contact';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {

  isEvenRow = false;

  displayedColumns: string[] = ['name'];

  contactMock: IContact[] = [];

  persons: IPerson[] = [];

  constructor(private personService: PersonService,
    private router: Router) {
      this.personService.getAllPersons().subscribe(data => this.persons = data);
      
  }

  toggleRowColor() {
    this.isEvenRow = !this.isEvenRow;
  }

  buttonDeleteList(id: number) { 
    this.personService.deletePerson(id).subscribe();
    window.location.reload()
  };

  buttonEditList(id: number) {
    this.router.navigate([`/detail/${id}`]);
   };

  redirectToSignup() {
    this.router.navigate(['/signup']);
  }

}
