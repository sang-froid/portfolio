import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { saveAs } from 'file-saver';
import Typed from 'typed.js';

interface Contact {
  nom: string;
  email: string;
  subject: string;
  message: string;
}


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent {

  item: Contact = {
    nom: '',
    email: '',
    subject: '',
    message: ''
  };

  isLoading = false;
  successMessage = '';
  errorMessage = '';

  selectedFilter: string = '*';

 
  constructor(private http: HttpClient) { }



  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  setFilter(filter: string) {
    this.selectedFilter = filter;
  }

  downloadCV() {
    this.isLoading = true;
    const fileUrl = '../../assets/pdf/cv_iréné_lokossou.pdf';

    fetch(fileUrl)
      .then(res => res.blob())
      .then(blob => {
        saveAs(blob, 'cv_iréné_lokossou.pdf');
      })
      .catch(err => console.error('Erreur téléchargement CV:', err))
      .finally(() => {
        this.isLoading = false;
      });
  }

  sendMessage(form: any) {
    if (form.invalid) {
      this.errorMessage = 'Veuillez remplir correctement tous les champs.';
      return;
    }

    this.isLoading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const url = 'https://votre-api.com/send-message';

    this.http.post(url, this.item).subscribe({
      next: (response) => {
        this.isLoading = false; // <<< IMPORTANT : mettre false
        this.successMessage = 'Votre message a été envoyé. Merci !';
        this.item = { nom: '', email: '', subject: '', message: '' };
        form.resetForm();
      },
      error: (err) => {
        this.isLoading = false; // <<< IMPORTANT : mettre false
        this.errorMessage = 'Erreur lors de l\'envoi du message. Veuillez réessayer.';
        console.error('Erreur HTTP:', err);
      }
    });
  }

isMenuOpen = false;

toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}



  activeTab: string = 'presentation';

  showTab(tab: string) {
    console.log("tab",tab);
    
    this.activeTab = tab;
  }

}
