import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { PricingComponent } from './pricing/pricing.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'how_it_works',
                component: AboutComponent
            },
            {
                path: 'explore_cars',
                component: VehiclesComponent
            },
            {
                path: 'car-details',
                component: VehicleDetailsComponent
            },
            {
                path: 'news',
                component: BlogComponent
            },
            {
                path: 'news-details',
                component: BlogDetailsComponent
            },
            {
                path: 'support',
                component: ContactComponent
            },
            
        ]
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
export const RoutingComponents = [
    PagesComponent,
    HomeComponent, AboutComponent, ServicesComponent, PricingComponent, VehiclesComponent, VehicleDetailsComponent,
    BlogComponent, ContactComponent
]