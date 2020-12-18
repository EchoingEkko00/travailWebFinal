import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../modeles/user';
import { FormulaireService } from './formulaire.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(2)]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    emailOffers: new FormControl(''),
    interfaceStyle: new FormControl('',[Validators.required]),
    subscriptionType: new FormControl('',[Validators.required]),
    notes: new FormControl('')
  });

  user: User;
  validMessage: String = "";

  constructor(private service: FormulaireService) { }

  ngOnInit(): void {
  }

  get form2() {
    return this.userForm.controls;
  }

  onSubmit():void {
    if(this.userForm.valid) {
      this.service.save(this.userForm.value).subscribe(data => {
        this.userForm.reset();
      })
    }
    else{
      this.validMessage="Remplir les champs correctement";
    }
  }
}
