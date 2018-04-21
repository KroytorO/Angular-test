import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsInTheBasketComponent } from './goods-in-the-basket.component';

describe('GoodsInTheBasketComponent', () => {
  let component: GoodsInTheBasketComponent;
  let fixture: ComponentFixture<GoodsInTheBasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsInTheBasketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsInTheBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
