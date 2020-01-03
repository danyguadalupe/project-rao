import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const APP_ROUTES: Routes = [
    {
        path: 'terms-and-conditions',
        loadChildren: () => import(`./WorkFlow/TermsAndConditions/terms-and-conditions.module`).then(m => m.TermsAndConditionsModule)
    },
    {
        path: 'subsidiaries',
        loadChildren: () => import(`./Subsidiaries/subsidiaries.module`).then(m => m.SubsidiariesModule)
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
