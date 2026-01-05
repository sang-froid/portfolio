import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DistinctionComponent } from './distinction/distinction.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [


    {
        path: '',

        component: HomeComponent
    },

    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
    },

    {
        path: 'distinction',

        component: DistinctionComponent
    },

     {
        path: 'contact',

        component: ContactComponent
    },
];
