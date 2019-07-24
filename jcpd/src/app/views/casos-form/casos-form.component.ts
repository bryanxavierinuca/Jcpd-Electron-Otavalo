import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Caso } from '../../models/Caso';
import { CasosService } from '../../services/casos.service';
@Component({
  selector: 'app-casos-form',
  templateUrl: './casos-form.component.html',
  styleUrls: ['./casos-form.component.css']
})
export class CasosFormComponent implements OnInit {
  caso: Caso = {
    caso_id : 0,
    proco_id: 0,
    tda_id: 0,
    dav_id: 0,
    tdenun_id: 0,
    caso_numcaso: '',
    caso_motivo: '',
    caso_observaciones: '',
    caso_fechareg: new Date(),
    caso_fechaingreso: new Date()
  };
  proco: any = [];
  tdenun: any = [];
  tda: any = [];
  ttda: any = [];
  angForm: FormGroup;
  nForm: FormGroup;
  constructor(private auth: AuthenticationService, private casosService: CasosService, private fb: FormBuilder) { 
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      proco_id: ['', Validators.required ],
      tda_id: ['', Validators.required ],
      dav_id: ['', Validators.required ],
      tdenun_id: ['', Validators.required ],
      caso_numcaso: ['', Validators.required ],
      caso_motivo: ['', Validators.required ],
      caso_observaciones: ['', Validators.required ],
      dacaso_fecharegv_id: ['', Validators.required ],
      caso_fechaingreso: ['', Validators.required ],

    });
  }

  ngOnInit() {
    this.nForm = new FormGroup({
      'proco_id': new FormControl(this.caso.proco_id, Validators.required)

    });


    this.casosService.getProco().subscribe(
      res => {
        this.proco = res;
      },
      err => console.error(err)
    );
    this.casosService.getTipoDenuncia().subscribe(
      res => {
        this.tdenun = res;
      } ,
      err => console.log(err)
    );
    this.casosService.getTiposDerechosAmenazas().subscribe(
      res => {
        this.ttda = res;
      } ,
      err => console.log(err)
    );
    this.casosService.getDerechoAmeViolentado().subscribe(
      res => {
        this.tda = res;
      } ,
      err => console.log(err)
    );
  }
  get proco_id() { return this.nForm.get('proco_id'); }


  saveNewCaso() {
    delete this.caso.caso_id;
    this.casosService.saveCaso(this.caso)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    );
  }
}
