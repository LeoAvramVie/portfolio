import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  linkedinUrl: string = 'https://www.linkedin.com/in/leoavramovic/';
  githubUrl:string = 'https://github.com/LeoAvramVie';
  pluralsight:string = 'https://app.pluralsight.com/profile/leo-avramovic';
  constructor() { }

  ngOnInit(): void {
  }

}
