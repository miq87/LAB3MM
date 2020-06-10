import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LAB3MM';

  studenci: string[];
  isCreated = false;
  
  ngOnInit() {
    this.studenci = ['Karol', 'Basia', 'Adam', 'Teresa', 'Wojciech', 'Ziemowit'];
  }

  onAddStudent(student: string) {
    if (this.studenci.includes(student)) {
      this.isCreated = true;
    } else {
      this.isCreated = false;
      this.studenci.push(student);
    }
  }

  onUsunStudent(index: number) {
    this.isCreated = false;
    this.studenci.splice(index, 1);
  }

}
