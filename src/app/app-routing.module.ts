import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LandingComponent } from './components/landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: LandingComponent, pathMatch: 'full', data: {animation: 'Home'} },
  { path: 'projects', component: ProjectsComponent, data: {animation: 'Projects'}},
  { path: 'contact', component: ContactComponent, data: {animation: 'Contact'}},
  { path: 'blog', component: BlogComponent, data: {animation: 'blog'}},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
