import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-distinction',
  standalone: true,
  imports: [

    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './distinction.component.html',
  styleUrl: './distinction.component.scss'
})
export class DistinctionComponent {

}
