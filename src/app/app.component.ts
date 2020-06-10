import { Component } from '@angular/core';
import { Samochod } from './samochod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LAB3MM';

  studenci: string[]
  isCreated = false
  // ZAD 2 - start
  samochody: Samochod[] = []
  // ZAD 2 - end
  
  ngOnInit() {
    this.studenci = ['Karol', 'Basia', 'Adam', 'Teresa', 'Wojciech', 'Ziemowit']
    // ZAD 2 - start
    this.samochody.push(new Samochod('Mitsubishi', 'ASX', 2010))
    this.samochody.push(new Samochod('Audi', 'Q8', 2019))
    this.samochody.push(new Samochod('Skoda', 'Kodiaq', 2020))
    // ZAD 2 - end
  }

  onAddStudent(student: string) {
    if (this.studenci.includes(student)) {
      this.isCreated = true
    } else {
      this.isCreated = false
      this.studenci.push(student)
    }
  }
  onUsunStudent(index: number) {
    this.isCreated = false
    this.studenci.splice(index, 1)
  }
  // ZAD 2 - start
  onAddSamochod(samochod: Samochod) {
    if (this.samochody.includes(samochod)) {
      this.isCreated = true
    } else {
      this.isCreated = false
      this.samochody.push(samochod)
    }
  }
  onUsunSamochod(index: number) {
    this.samochody.splice(index, 1)
  }
  // ZAD 2 - end

}
