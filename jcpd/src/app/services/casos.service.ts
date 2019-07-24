import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Caso } from '../models/Caso';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CasosService {
 // Coneccion al servidor de NODE, DONDE TENEMOS LA BASE DE DATOS
 API_URI = 'http://localhost:3000/api';

 constructor(private http: HttpClient) {}

 getCasos() {
   return this.http.get(`${this.API_URI}/casos`);
 }
 getCaso(id: string) {
   return this.http.get(`${this.API_URI}/casos/$ {id} `);
 }
 deleteCaso(id: string) {
   return this.http.delete(`${this.API_URI}/casos/${id}`);
 }

 saveCaso(caso: Caso) {
   return this.http.post(`${this.API_URI}/casos`, caso);
 }
 updateCaso(id: string, updatedCaso: Caso): Observable<Caso> {
   return this.http.put(`${this.API_URI}/casos/${id}`, updatedCaso);
 }

 // //////-------------------------------------------------///
 // Contribuyentes de otras tablas

 getProco() {
   return this.http.get(`${this.API_URI}/proco`);
 }
 getTipoDenuncia() {
   return this.http.get(`${this.API_URI}/tipoDenuncia`);
 }
 getDerechoAmeViolentado() {
   return this.http.get(`${this.API_URI}/tipoDerechoAmenazas`);
 }
 getTiposDerechosAmenazas() {
   return this.http.get(`${this.API_URI}/amenazadoViolentado`);
 }
}
