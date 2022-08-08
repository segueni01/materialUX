import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  //Constantes
  private LOGIN_ERROR = 'Datos de usuario incorrectos.';

  public hidePassword = true;
  public loginForm: FormGroup;

  constructor(private _fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.loginForm = this._fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  ngOnInit(): void {
  }

  changeHideBtn(): string {
    let activateVisibilyty: string;
    activateVisibilyty = this.hidePassword ? 'visibility_off' : 'visibility';
    return activateVisibilyty;
  }

  logear(): void{
    const user = this.loginForm.value.user;
    const password = this.loginForm.value.password;

    if(user == 'sebas' && password == '123'){
      // Redireccionamos al password
    }else{
      this.errorLogin();
    }
  }

  errorLogin(){
    this._snackBar.open(this.LOGIN_ERROR, 'Aceptar',{
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }



}
