import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';



import { ReversePipe } from './pipes/reverse.pipe';
import { ProductsComponent } from '../shared/compoents/products/products.component';
import { ProductComponent } from '../shared/compoents/product/product.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { HighlightDirective } from './directives/directives/highlight.directive';

import { ImgComponent } from './compoents/img/img.component';



@NgModule({
  declarations: [
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    ReversePipe,
    TimeAgoPipe,
    HighlightDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule
  ],

  exports :[
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    ReversePipe,
    TimeAgoPipe,
    HighlightDirective,
  ]
})
export class SharedModule { }
