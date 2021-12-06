import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetlleComponent implements OnInit {
  producto;

  constructor(
    private activateRoute: ActivatedRoute,
    private productoSrv: ProductosService
  ) {
    this.cargarProducto();
  }
  async cargarProducto() {
    try {
      const id = this.activateRoute.snapshot.paramMap.get('id');
      console.log(id);
      this.producto = await this.productoSrv.getProducto(id).toPromise();
    } catch (e) {}
  }

  ngOnInit(): void {}
}
