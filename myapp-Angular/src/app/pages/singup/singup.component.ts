import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserRegistroResponse } from "../../interfaces/Users"

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  hide = true;
  myForm:FormGroup
  constructor(private fb:FormBuilder,
              private usuariosSrv:UsersService,
              private router: Router,
              private snackbar: MatSnackBar) {
    this.myForm = this.fb.group({
      nombre:["",[Validators.required,Validators.minLength(4)]],
      email:["",[Validators.required]],
      password:["",[Validators.required]],
    })
  }
  async registrarse(){
    try{
      const registro: UserRegistroResponse = await this.usuariosSrv.save(this.myForm.value)
      console.log(registro)
      if(registro){
        this.snackbar.open("Registro Satisfactorio", null, {
          duration: 2000
        })
        this.router.navigateByUrl("/")
      } else {
        this.snackbar.open(registro.message, "Cerrar", {
          duration: 2000
        })

      }
    }catch(e){

    }

  }
  ngOnInit(): void {
  }

}
