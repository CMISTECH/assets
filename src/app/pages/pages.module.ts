import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule, NgbDropdownModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { SharedModule } from './_shared/shared.module';
import { PagesRoutingModule, RoutingComponents } from './pages-routing.module';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

@NgModule({
    declarations: [
        RoutingComponents,
        VehicleDetailsComponent,
        BlogDetailsComponent
    ],
    imports: [
        CommonModule,
        CarouselModule,
        NgSelectModule,
        NgbModule, NgbDropdownModule, NgbDatepickerModule,
        BsDatepickerModule,
        SharedModule,
        PagesRoutingModule
    ],
    providers: []
})
export class PagesModule { }