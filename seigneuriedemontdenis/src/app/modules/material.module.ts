import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatIconRegistry,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSliderModule
} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

const modules = [
    BrowserAnimationsModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSliderModule
];

@NgModule({
    imports: [modules],
    exports: [modules]
})
export class MaterialModule {
    constructor(
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer
    ) {
        this.matIconRegistry.addSvgIcon('lsmd-logo',
            this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/lsmd-logo.svg'));
    }
}

