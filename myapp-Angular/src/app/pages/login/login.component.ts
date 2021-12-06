import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserLoginResponse } from "../../interfaces/Users"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  myForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private usuariosSrv: UsersService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {
    this.myForm = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
    })
  }
  async ingresar() {
    try {
      console.log(this.myForm.value)
      const login: UserLoginResponse = await this.usuariosSrv.login(this.myForm.value)
      console.log(login)
      if (login["token"]) {
        localStorage.setItem("token", login["token"])
        this.snackbar.open("Bienvenido/a", null, {
          duration: 2000
        })
        this.router.navigateByUrl("/")
      } else {
        this.snackbar.open(login.message, "Cerrar", {
          duration: 2000
        })
      }
    } catch (e) {

    }

  }
  ngOnInit(): void {
  }

}
