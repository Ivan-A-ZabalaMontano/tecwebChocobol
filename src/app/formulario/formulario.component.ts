import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';  
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  spinner={
    cantidad:1,
    descuento: "10%"
  }
  compra=
  {
    nombre:null,
    apellido:null,
    celular:null,
    email:null,
    tarjeta:null,
    codigo:null,
    productos:null
  }
setSpinner(operation:string)
{
  if(operation=="+")
  {
    this.spinner.cantidad++; 
  }
  else
  {
    if(this.spinner.cantidad>1)
    {
      this.spinner.cantidad--;
    }
  }
}
comprar()
{
  if(this.compra.apellido!=null && this.compra.nombre!=null && this.compra.celular!=null && this.compra.codigo!=null && this.compra.email!=null && this.compra.tarjeta!=null)
  {

    if(this.spinner.cantidad>2)
    {
      alert("Ha recibido un descuento del 10% por comprar más de 2 productos");
    }
    else
    {
      alert("Compra realizada con exito");
    }
  } 
  else
  {
    alert("Por favor llene todos los campos");
  } 
}
setImage(image:string)
{

}
}
