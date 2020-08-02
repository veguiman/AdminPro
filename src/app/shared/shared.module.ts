import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreacrumbsComponent } from './breacrumbs/breacrumbs.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    BreacrumbsComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  exports: [
    BreacrumbsComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
