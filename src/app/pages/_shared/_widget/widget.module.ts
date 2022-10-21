import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogWidgetComponent } from './blog-widget/blog-widget.component';
import { TestimonyWidgetComponent } from './testimony-widget/testimony-widget.component';
import { VehicleWidgetComponent } from './vehicle-widget/vehicle-widget.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [BlogWidgetComponent, VehicleWidgetComponent, TestimonyWidgetComponent, VehicleWidgetComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [BlogWidgetComponent, VehicleWidgetComponent, TestimonyWidgetComponent]
})
export class WidgetModule { }