import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { saveAs } from 'file-saver';
import Typed from 'typed.js';

interface Contact {
  name: string;
  email: string;
  sujet: string;
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
    name: '',
    email: '',
    sujet: '',
    message: ''
  };

  isLoading = false;
  successMessage = '';
  errorMessage = '';

  selectedFilter: string = '*';
  skills = [
    { icon: 'bi bi-shield-check', label: 'SEO' },
    { icon: 'bi bi-phone', label: 'Responsive Design' },
    { icon: 'bi bi-lightning-charge', label: 'PWA' },
    { icon: 'bi bi-cloud-upload', label: 'Deployment' },
    { icon: 'bi bi-bug', label: 'Debugging' },
    { icon: 'bi bi-diagram-3', label: 'Architecture' },
    { icon: 'bi bi-graph-up', label: 'Analytics' },
    { icon: 'bi bi-share', label: 'Agile/Scrum' },
  ];

  projects = [
    {
      title: 'Mairie de Toffo',
      category: ['web', 'official'],
      img: '../../assets/img/portfolio/mairie.png',
      link: 'https://mairietoffo.bj',
    },
    {
      title: 'UDA Organization',
      category: ['web'],
      img: 'assets/img/portfolio/uda.png',
      link: 'https://app.udaorganisation.org',
    },
    {
      title: 'Kondocv',
      category: ['web',],
      img: 'assets/img/portfolio/kondocv.png',
      link: 'https://kondocv.com',
    },
    {
      title: 'SIDoFFE-NG',
      category: ['web', 'official'],
      img: 'assets/img/portfolio/sidoffe.png',
      link: 'https://sidoffe-ng.social.gouv.bj/sidoffepublic/public',
    },
      {
      title: 'Yemi',
      category: ['web', ],
      img: 'assets/img/portfolio/yemi.jpeg',
      link: 'https://yemi.iwajutech.com/',
    },

      {
      title: 'Marketo',
      category: ['web', ],
      img: 'assets/img/portfolio/marketo.png',
      link: 'https://adminmarketo.iwajutech.com/#/auth/login',
    }
  ];
  constructor(private http: HttpClient) { }


    ngAfterViewInit(): void {
    const typed = new Typed('.typed', {
      strings: ['Designer', 'Developer', 'Freelancer', 'Artist'], // ← texte
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 1500,
      loop: true
    });
  }
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
        this.item = { name: '', email: '', sujet: '', message: '' };
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


}
