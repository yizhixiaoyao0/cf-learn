import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public keyword: string;
  public list: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  onAdd() {
    if (this.list.indexOf(this.keyword) == -1) {
      this.list.push(this.keyword);
    }
    this.keyword = '';
  }

  onDelete(key) {
    this.list.splice(key, 1);
  }
}
