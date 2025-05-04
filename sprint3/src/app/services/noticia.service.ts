import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Noticia from '../models/Noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private firestore: Firestore) {}

  read(): Observable<Noticia[]> {
    const noticiaRef = collection(this.firestore, 'noticias');
    return collectionData(noticiaRef, { idField: 'id' }) as Observable<Noticia[]>;
  }
}

