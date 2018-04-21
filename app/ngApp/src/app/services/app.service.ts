/** Cвязан с файлом home-page.component.ts*/

import {EventEmitter, Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AppService {

  private serverApi = environment.apiUrl;

  constructor (private http: HttpClient){}

  /**Любой методы http возращают Observable<any>  объект  или стрим. Зная это, необходимо добавить к методу возврат, т.е. return.
   * Тогда метод вернет getUsers вернет Observable<any>  объект*/
//делаем запром на сервер
  getUsers(){
    //функция get принимает url,по которому мы долджны забрать наши данные
    return this.http.get(`${this.serverApi}/api/json/getUsers`)

  }

/**Каталог список*/

  public hideMenu: boolean = true;
  private _show: boolean = false;
  public onMenuStateChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleMenu() {
    this._show = !this._show;
    this.onMenuStateChanged.emit(this._show);
  }



}
