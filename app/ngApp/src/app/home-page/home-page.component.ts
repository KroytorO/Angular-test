import {Component, Input, OnInit} from '@angular/core';
import {AppService} from "../services/app.service";

//создадим интерфейс юзера
interface User{
  name:string;
  price: number;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  // providers:[AppService]
})
export class HomePageComponent implements OnInit {

  // products=[
  //   // {product: "Штукатурка 1"},
  //   // {product: "Штукатурка 2"},
  //   // {product: "Штукатурка 3"},
  //   // {product: "Штукатурка 4"},
  //   // {product: "Штукатурка 5"},
  //   // {product: "Штукатурка 6"}
  // ]
  @Input() ButtonSelected: boolean = false;

  // user является интерфейсом User,но массивом
  user: User[]=[];
  constructor(private httpservice: AppService ){
    httpservice.onMenuStateChanged.subscribe(state => this.ButtonSelected = state);
  }

  /**Библиотека rsjx оптимизирует наш код, она смотрит если нет никаких слушателей
   * на наш стрим, то она просто не будет работать. Для этого мы подписываемся
   * на стрим, который возращает метод getUsers*/
  ngOnInit(){
    //указываем, что ожидаем получить уже сам массив юзеров (user: User[])
    this.httpservice.getUsers().subscribe((user: User[])=>{
      this.user = user;
       console.log(user);
    });
    /**метод subscribe принимает либо объект либо 3 функкции либо 1 функцию ,
     которая будет выполненна по завершению стрима */
  }

/**Каталог список*/


  // constructor(private _gs: AppService){
  //   _gs.onMenuStateChanged.subscribe(state => this.ButtonSelected = state);
  // }

}
