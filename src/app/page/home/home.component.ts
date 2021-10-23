import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private stackoverflowUrl: string = 'https://stackoverflow.com/users/1791913/faisal?tab=profile';
  private linkedinUrl: string = 'https://www.linkedin.com/in/mohammadfaysal/';
  private fiverrUrl:string = 'https://www.fiverr.com/faisalmuhammad_';
  private facebookUrl:string = 'https://www.facebook.com/phaysall';
  private twitterUrl:string = 'https://twitter.com/faisssallll';
  private githubUrl:string = 'https://github.com/faisalmuhammad';
  private googleUrl:string = 'https://plus.google.com/+MuhammadFaisal04';
  constructor() { }

  ngOnInit(): void {
  }

}
