import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { WOW } from 'wowjs';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mon-portfolio';


  constructor(private router: Router) {}

  ngOnInit() {
    new WOW().init(); //plus de TypeError

  }

    ngAfterViewInit(): void {
    AOS.init({ duration: 800, once: true });
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        AOS.refresh();
      }
    });
  }

}
