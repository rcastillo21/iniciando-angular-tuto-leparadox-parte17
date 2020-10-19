import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'parte17';

  //{static: true} Es opcional si el elemento cambia con el ngIf pasa a ser False, sino depende es true
  @ViewChild('nombre', {static: true}) nombre: ElementRef;
  //Para hacer Referencia a un Componente Hijo
  @ViewChild(HijoComponent) hijo: HijoComponent;

  ngOnInit(){
    console.log(this.nombre.nativeElement.value);
    this.nombre.nativeElement.value = "Ruben J. Castillo G.";
    console.log(this.nombre.nativeElement.value);
  }

  verNombre(){
    alert(this.nombre.nativeElement.value);
  }

  verHijo(){
    alert(this.hijo.title);
    console.log(this.hijo)
  }

  cambiarHijo() {
    this.hijo.title = 'Hijo Modificado';
  }
}
