import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-goods-in-the-basket',
  templateUrl: './goods-in-the-basket.component.html',
  styleUrls: ['./goods-in-the-basket.component.css']
})
export class GoodsInTheBasketComponent implements OnInit {
  @Input() merchandiseBasket;
  constructor() { }

  ngOnInit() {
  }

}
