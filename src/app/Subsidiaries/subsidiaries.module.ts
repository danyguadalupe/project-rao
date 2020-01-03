import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubsidiariesRoutingModule } from './subsidiaries-routing.module';
import { SubsidiariesComponent } from './subsidiaries.component';


@NgModule({
    declarations: [
        SubsidiariesComponent
    ],
    imports: [
        CommonModule,
        SubsidiariesRoutingModule
    ]
})
export class SubsidiariesModule { }
