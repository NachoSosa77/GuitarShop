import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }
  getProductos(){
    return this.http.get(environment.endPointApi+"productos")
  }
  getProducto(id){
    return this.http.get(environment.endPointApi+"productos/"+id)
  }
}
