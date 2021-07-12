import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ListMerchantsComponent } from './components/list-merchants/list-merchants.component';
import { BreadcumbsComponent } from './components/breadcumbs/breadcumbs.component';
import { TitleComponent } from './components/title/title.component';
import { DataDetailComponent } from './components/data-detail/data-detail.component';

const SHARED_EXPORTS = [
    HeaderComponent,
    ListMerchantsComponent,
    BreadcumbsComponent,
    TitleComponent,
    DataDetailComponent
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
