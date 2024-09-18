import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../../primeng/primeng.module';
import { HomeComponent } from './home/home.component';
import { ModelsAndControlsRoutingModule } from './modelsAndControls-routing.module';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [HomeComponent, ReportsComponent],
  imports: [CommonModule, ModelsAndControlsRoutingModule, PrimengModule],
})
export class ModelsAndControlsModule {}
