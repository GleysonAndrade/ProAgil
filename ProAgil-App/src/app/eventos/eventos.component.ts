import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  
  //get filtroLista(): string{
   // return this. filtroLista;
  //}
  //set filtroLista(value: string){
  //this. filtroLista = value;
   //this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  //}

  eventosFiltrados: any = [];

  eventos: any = [];
  imagemLargura = 50;
  imagemMargem = 2;
  mostrarImagem = false;
  //filtroLista = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }
  
  //filtrarEventos(filtrarPor: string): any{
  //  filtrarPor = filtrarPor.toLocaleLowerCase();
  //  return this.eventos.filter(
  //    evento => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1
  //  );
  //}
  
  alterarImagem(){
    this.mostrarImagem = !this.mostrarImagem;
  }

  getEventos(){
    this.eventos = this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.eventos = response;
    }, error =>{
      console.log(error);
    });
  }
}
