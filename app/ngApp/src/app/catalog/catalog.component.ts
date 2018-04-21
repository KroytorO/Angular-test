import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  products=[
    {product: "Штукатурка 1"},
    {product: "Штукатурка 2"},
    {product: "Штукатурка 3"},
    {product: "Штукатурка 4"},
    {product: "Штукатурка 5"},
    {product: "Штукатурка 6"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
