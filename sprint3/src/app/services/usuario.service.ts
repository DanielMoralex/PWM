import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, deleteDoc, query, where, getDocs } from '@angular/fire/firestore';
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

  async getUsuarioByEmail(email: string): Promise<Usuario | null> {
    const usuarioRef = collection(this.firestore, 'usuario');
    const q = query(usuarioRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return null;
    } else {
      const usuarioDoc = querySnapshot.docs[0];
      return usuarioDoc.data() as Usuario;
    }
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
