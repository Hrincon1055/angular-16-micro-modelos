import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../primeng/primeng.module';

import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [LoadingComponent],
  imports: [CommonModule, PrimengModule, HttpClientModule, ReactiveFormsModule],
  exports: [PrimengModule, ReactiveFormsModule, LoadingComponent],
})
export class SharedModule {}
