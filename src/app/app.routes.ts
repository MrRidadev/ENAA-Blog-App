import { Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { AproposComponent } from './apropos/apropos.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { ContactComponent } from './contact/contact.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostFormComponent } from './post/post-form/post-form.component';

export const routes: Routes = [
    {
        path : '',
        component : HomeComponent
    },
    
    {
        path : 'login',
        component : LoginComponent
    },
    {
        path : 'register',
        component : RegisterComponent
    },
    {
        path : 'apropos',
        component : AproposComponent

    },
    {
        path : 'post',
        component : PostDetailComponent
    },
    {
        path : 'cantact',
        component : ContactComponent
    },
    {
        path : 'categorie',
        component : PostListComponent
    },

    {   path: 'post-form',
     component : PostFormComponent}


];
