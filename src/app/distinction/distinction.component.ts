import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-distinction',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './distinction.component.html',
  styleUrl: './distinction.component.scss'
})
export class DistinctionComponent {

}
