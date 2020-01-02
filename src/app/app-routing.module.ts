import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const APP_ROUTES: Routes = [
    {
        path: 'work-flow',
        loadChildren: () => import(`./Modules/WorkFlow/work-flow.module`).then(m => m.WorkFlowModule)
    },
    {
        path: 'offices',
        loadChildren: () => import(`./Modules/Offices/offices.module`).then(m => m.OfficesModule)
    },
    {
        path: '**',
        redirectTo: ''
    }
];


@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES, { useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
