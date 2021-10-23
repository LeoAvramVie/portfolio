import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./page/about/about.component";
import {HomeComponent} from "./page/home/home.component";
import {ServiceComponent} from "./page/service/service.component";
import {EducationComponent} from "./page/education/education.component";
import {ContactComponent} from "./page/contact/contact.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component:AboutComponent  },
  { path: 'service', component:ServiceComponent  },
  { path: 'education', component:EducationComponent  },
  { path: 'contact', component:ContactComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
