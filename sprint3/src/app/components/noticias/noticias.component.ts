import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiaService } from '../../services/noticia.service';
import Noticia from '../../models/Noticia';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent implements OnInit {
  noticias: Noticia[] = [];

  constructor(private noticiaService: NoticiaService) {}

  ngOnInit(): void {
    this.noticiaService.read().subscribe(data => {
      this.noticias = data;
    });
  }
}
