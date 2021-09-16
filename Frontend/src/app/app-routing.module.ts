import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PetlistComponent } from './petlist/petlist.component';
import { PostComponent } from './post/post.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'pets', component: PetlistComponent},
  {path: 'post', component: PostComponent},
  {path: 'apply', component: ApplicationComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
