import{ModuleWithProviders} from '@angular/core';
import{Routes,RouterModule} from '@angular/router'; 
import {homeComponent} from './components/pages/home.component';
import {aboutComponent} from './components/pages/about.component';
import {profileComponent} from './components/pages/profile.component';

const AppRoutes : Routes=[
   { 
       path :'',
       component:homeComponent
   },
    { 
       path :'about',
       component:aboutComponent
   }
   ,
    { 
       path :'profile',
       component:profileComponent
   }
];
export const routing:ModuleWithProviders =RouterModule.forRoot(AppRoutes);
