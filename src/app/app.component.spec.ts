import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BlueboxdlsModule } from '@bluebox_dls/angular';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [
                RouterTestingModule,
                BlueboxdlsModule
            ]
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'rao-project'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('rao-project');
    });
});
