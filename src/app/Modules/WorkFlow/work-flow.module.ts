import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkFlowRoutingModule } from './work-flow-routing.module';
import { WorkFlowComponent } from './work-flow.component';


@NgModule({
    declarations: [
        WorkFlowComponent
    ],
    imports: [
        CommonModule,
        WorkFlowRoutingModule,

    ],
    // bootstrap: [
    //     WorkFlowComponent
    // ]
})
export class WorkFlowModule { }
