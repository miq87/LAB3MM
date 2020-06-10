import { Component, OnInit, Input } from '@angular/core';
import { Samochod } from '../samochod';

@Component({
  selector: 'app-samochody-view',
  templateUrl: './samochody-view.component.html',
  styleUrls: ['./samochody-view.component.scss']
})
export class SamochodyViewComponent implements OnInit {

  @Input() samochodyItems: Samochod[];

  constructor() { }

  ngOnInit(): void {
  }

}
