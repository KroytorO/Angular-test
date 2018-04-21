import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-groups',
  templateUrl: './product-groups.component.html',
  styleUrls: ['./product-groups.component.css']
})
export class ProductGroupsComponent implements OnInit {
  @Input() merchandise; //ждем что-то в ответ
  constructor() { }

  ngOnInit() {
  }

}
