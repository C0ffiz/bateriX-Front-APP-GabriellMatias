import { Routes } from '@angular/router';
import { HomePage } from './features/home/home.component';
import { LoginComponent } from './features/account/login/login.component';
import { CreateAccountComponent } from './features/account/create-account/create-account.component';
import { CreateAccountEnterpriseComponent } from './features/account/create-account-enterprise/create-account-enterprise.component';
import { ContactTeamComponent } from './features/contact/contact-team/contact-team.component';
import { AboutComponent } from './features/about/about.component';
import { BlogComponent } from './features/blog/blog.component';
import { BlogPostComponent } from './features/blogpost/blogpost.component';
import { LocalDescarteComponent } from './features/local-descarte/local-descarte.component';

export const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'create-account-enterprise', component: CreateAccountEnterpriseComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blogpost/:id', component: BlogPostComponent },
  { path: 'contact-team', component: ContactTeamComponent },
  { path: 'recycling-locations', component: LocalDescarteComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Default route
  { path: '**', redirectTo: '/home' }  // Catch-all route
];
