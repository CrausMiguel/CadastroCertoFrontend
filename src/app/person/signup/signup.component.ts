import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IContact } from 'src/app/contact/contact';
import { PersonService } from '../person.service';
import { ContactService } from '../../contact/contact.service';
import { forkJoin } from 'rxjs';
import { IPerson } from '../person';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  today: Date = new Date();
  year: number = this.today.getFullYear();
  month: number = this.today.getMonth();
  day: number = this.today.getDate();

  minDate = new Date(1950, 0, 1);
  maxDate = new Date(this.year, this.month, this.day);

  personForm = new FormGroup({
    name: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    birthday: new FormControl(this.today, Validators.required)
  })

  constructor(private _formBuilder: FormBuilder, private personService: PersonService,
    private contacService: ContactService, private router: Router) {

    this.contactForm = this._formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      phoneNumber: ['', Validators.required],
      person: [Validators.required]
    });

  }

  editMode = false;

  editIndex = 0;

  contactForm: FormGroup;

  contacts: IContact[] = [];

  addQuestion(): void {
    if (this.editMode) {
      this.contacts[this.editIndex] = this.contactForm.value;
      this.editMode = false;
    } else {
      const newContact: IContact = {
        id: '',
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        phoneNumber: this.contactForm.value.phoneNumber,
        person: this.contactForm.value.person
      };
      this.contacts.push(newContact);
    }
    this.contactForm.reset();
  }

  editQuestion(index: number): void {
    this.editMode = true;
    this.editIndex = index;
    this.contactForm.setValue(this.contacts[index]);
  }

  cadastrar() {
    this.personService.postPerson(this.personForm.value).subscribe(
      (data) => {
        this.contacts.forEach((contact) => {
          contact.person = data;
          this.contacService.postContact(contact).subscribe();
        })
      });
    this.router.navigate(['']);
  }
}
