import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from './dropdown/dropdown.module';
import { HeaderModule } from './header/header.module';
import { ContentModule } from './content/content.module';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
    HeaderModule,
    ContentModule
  ],
  declarations: [],
  exports: [DropdownModule,
    HeaderModule,
    ContentModule]
})
export class SharedModule { }
