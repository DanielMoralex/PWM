import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, deleteDoc} from '@angular/fire/firestore';
import Usuario from '../models/Usuario'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private firestore: Firestore) { }

  //Métodos para gestión CRUD
  create(usuario: Usuario) {
    const usuarioRef = collection(this.firestore, 'usuario');
    return addDoc(usuarioRef, usuario);
  }

  read(): Observable<Usuario[]> {
    const usuarioRef = collection(this.firestore, 'usuario');
    return collectionData(usuarioRef, {idField: 'id'}) as Observable<Usuario[]>;
  }

  update(id: string, usuario: Usuario) {
    const usuarioDocRef = doc(this.firestore, `usuario/${id}`);
    return updateDoc(usuarioDocRef, { ...usuario });
  }

  delete(usuario: Usuario) {
    const usuarioDocRef = doc(this.firestore, `usuario/${usuario.id}`);
    return deleteDoc(usuarioDocRef);
  }
}
