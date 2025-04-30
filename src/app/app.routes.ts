import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { MenComponent } from './men/men.component';
import { LoginComponent } from './login/login.component';
import { WomenComponent } from './women/women.component';
import { RegisterComponent } from './register/register.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'kids',component:KidsComponent},
    {path:'men',component:MenComponent},
    {path:'login',component:LoginComponent},
    {path:'women',component:WomenComponent},
    {path:'register',component:RegisterComponent},
    {path:'alogin',component:AdminloginComponent}

];
