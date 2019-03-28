import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';

const modules = [
    TableModule,
    MessagesModule
];

@NgModule({
    imports: [modules],
    exports: [modules],
    providers: [
    ]
})
export class PrimeModule {
    constructor() {
    }
}
