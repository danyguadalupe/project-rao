import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlueboxdlsModule } from '@bluebox_dls/angular';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BlueboxdlsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
