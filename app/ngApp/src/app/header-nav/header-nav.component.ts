import {Component, Input, OnInit} from '@angular/core';
import {AppService} from "../services/app.service";

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {


  // constructor() { }
  // dataList=''
  // ngOnInit() {
  // }

  // productList(){
  //   this.dataList='Кирпич'
  // }

  @Input() ButtonSelected: boolean = false;
  public activeMobileMenuAdmin = false;
  public activeClass = false;
  public adminPanelView = false;
  public adminMenuView = true;

  constructor(private _gs: AppService){
    _gs.onMenuStateChanged.subscribe(state => this.activeClass = state);
  }

  admMenuShow(){
    this._gs.toggleMenu();
  }

  ngOnInit() {
    this.detectDeviceWidth();
  }

  detectDeviceWidth() {
    if (window.innerWidth < 1024) {
      this.activeMobileMenuAdmin = true;
    } else {
      this.activeMobileMenuAdmin = false;
    }
  }

}
