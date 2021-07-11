import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';

const SHARED_EXPORTS = [
    HeaderComponent
];

@NgModule({
    declarations: [
        ...SHARED_EXPORTS,
    ],
    exports: [
        ...SHARED_EXPORTS,
    ],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class SharedModule { }
