import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllComponent } from './all/all.component';

export const routes: Routes = [
    {'path': '' , component: HomeComponent},
    {'path': 'all' , component: AllComponent}
];
