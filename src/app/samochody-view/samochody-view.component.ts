import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Samochod } from '../samochod';

@Component({
  selector: 'app-samochody-view',
  templateUrl: './samochody-view.component.html',
  styleUrls: ['./samochody-view.component.scss']
})
export class SamochodyViewComponent implements OnInit {

  @Input() samochodyItems: Samochod[]
  @Output() removeCar: EventEmitter<number> = new EventEmitter<number>()
  @Output() addCar: EventEmitter<Samochod> = new EventEmitter<Samochod>()

  car = new Samochod('', '', null);
  
  constructor() { }

  ngOnInit() { }
    
  usunSamochod(index: number) {
    this.removeCar.emit(index)
  }
  dodajSamochod() {
    this.addCar.emit(this.car)
  }

}