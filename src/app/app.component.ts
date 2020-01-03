import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    title = 'rao-project';
    public statusLoader: boolean = true;
    constructor() {
        setTimeout(() => {
            this.statusLoader = false;
            console.log('desactivando loader')
        }, 2000);
    }
}
