import { Component, OnInit } from '@angular/core';
import { themeChange } from 'theme-change';

@Component({
  selector: 'app-theme-controller',
  imports: [],
  templateUrl: './theme-controller.html',
})
export class ThemeController implements OnInit {
  ngOnInit(): void {
    themeChange(false);
  }
}
