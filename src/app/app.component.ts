import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cadastroCertoFrontend';
}
export const apiUrl = {
  apiUrl: "http://localhost:8080/api/"
};
