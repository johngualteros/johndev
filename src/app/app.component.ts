import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'app';
  isDark: boolean;

  ngOnInit() {
    this.isDark = localStorage.getItem('theme') == 'dark' ? true : false;
    if (this.isDark) {
      document.body.classList.add('dark');
    }
  }

  changeMode() {
    this.isDark = !this.isDark;
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');

    if (this.isDark) {
      document.body.classList.add('dark');
    }
    else {
      document.body.classList.remove('dark');
    }
  }
}
