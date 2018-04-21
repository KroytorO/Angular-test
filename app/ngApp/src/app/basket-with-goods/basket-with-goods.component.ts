import { Component, OnInit } from '@angular/core';
import {AppService} from "../services/app.service";

interface User{
  name:string;
  price: number;
}

@Component({
  selector: 'app-basket-with-goods',
  templateUrl: './basket-with-goods.component.html',
  styleUrls: ['./basket-with-goods.component.css'],
  providers:[AppService]
})
export class BasketWithGoodsComponent implements OnInit {

  user: User[]=[];
  constructor(private httpserviceBasket: AppService ){}

  // constructor() { }

  ngOnInit() {
    //указываем, что ожидаем получить уже сам массив юзеров (user: User[])
    this.httpserviceBasket.getUsers().subscribe((user: User[])=>{
      this.user = user;
      // console.log(user);
    });
    /**метод subscribe принимает либо объект либо 3 функкции либо 1 функцию ,
     которая будет выполненна по завершению стрима */
  }

}
