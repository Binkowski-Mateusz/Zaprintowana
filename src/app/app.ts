import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBar } from './top-bar/top-bar';
import { ButtonMenuBar } from './button-menu-bar/button-menu-bar';
import { MainMenu } from './main-menu/main-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopBar, ButtonMenuBar, MainMenu],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Zaprintowana');
}
