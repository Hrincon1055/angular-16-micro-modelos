import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';

let modulesPrimen: any[] = [ButtonModule];
@NgModule({
  imports: [...modulesPrimen],
  exports: [...modulesPrimen],
  providers: [],
})
export class PrimengModule {}
