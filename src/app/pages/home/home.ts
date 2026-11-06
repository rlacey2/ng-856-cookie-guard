import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// 20261105: The public landing page remains accessible while the consent dialog is awaiting a choice.
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html'
})
export class Home {}